/**
 * Aura AI Audit Logger
 *
 * Logs AI interactions to FHIR AuditEvent resources for compliance and traceability.
 * All AI requests and responses are recorded with appropriate metadata.
 */

import Oystehr from '@oystehr/sdk';
import { createHash } from 'crypto';
import { AuditEvent, Extension } from 'fhir/r4b';
import { DateTime } from 'luxon';
import { getSecret, Secrets, SecretsKeys } from 'utils';
import { AI_AUDIT_EXTENSION, AI_OPERATION_CODING, AiAuditData, AURA_AUDIT_EVENT_TYPE } from './audit-logger.types';

/**
 * Create a SHA-256 hash of content for privacy-preserving logging.
 * We don't store raw prompts/responses in audit logs, only hashes.
 */
function hashContent(content: string): string {
  return createHash('sha256').update(content).digest('hex').substring(0, 16);
}

/**
 * Build AI-specific extensions for the AuditEvent.
 */
function buildAiExtensions(data: AiAuditData): Extension[] {
  const extensions: Extension[] = [
    {
      url: AI_AUDIT_EXTENSION.modelVersion,
      valueString: data.modelVersion,
    },
    {
      url: AI_AUDIT_EXTENSION.responseTimeMs,
      valueInteger: data.durationMs,
    },
    {
      url: AI_AUDIT_EXTENSION.correlationId,
      valueString: data.correlationId,
    },
    {
      url: AI_AUDIT_EXTENSION.inputTokens,
      valueInteger: data.inputTokens,
    },
    {
      url: AI_AUDIT_EXTENSION.outputTokens,
      valueInteger: data.outputTokens,
    },
  ];

  if (data.promptTemplateVersion) {
    extensions.push({
      url: AI_AUDIT_EXTENSION.promptTemplateVersion,
      valueString: data.promptTemplateVersion,
    });
  }

  if (data.confidenceScore !== undefined) {
    extensions.push({
      url: AI_AUDIT_EXTENSION.confidenceScore,
      valueDecimal: data.confidenceScore,
    });
  }

  return extensions;
}

/**
 * Log an AI interaction to FHIR AuditEvent.
 *
 * This function creates an immutable audit record of an AI interaction.
 * The prompt and response content are hashed to protect patient privacy
 * while still providing traceability.
 *
 * @param oystehr - The Oystehr SDK client
 * @param data - The complete audit data including input and output
 * @param secrets - Oystehr secrets for configuration
 * @returns The created AuditEvent resource ID
 *
 * @example
 * ```typescript
 * const auditId = await logAiInteraction(oystehr, {
 *   actorReference: 'Practitioner/123',
 *   patientReference: 'Patient/456',
 *   encounterReference: 'Encounter/789',
 *   operationType: 'pre-visit-synthesis',
 *   prompt: 'Summarize patient history...',
 *   modelVersion: 'claude-sonnet-4-20250514',
 *   response: 'Based on the patient history...',
 *   inputTokens: 1500,
 *   outputTokens: 800,
 *   durationMs: 2500,
 *   outcome: '0',
 *   correlationId: 'abc-123',
 * }, secrets);
 * ```
 */
export async function logAiInteraction(oystehr: Oystehr, data: AiAuditData, secrets: Secrets | null): Promise<string> {
  const organizationId = getSecret(SecretsKeys.ORGANIZATION_ID, secrets);
  const operationCoding = AI_OPERATION_CODING[data.operationType];

  // Build entity references for the audit
  const entities: AuditEvent['entity'] = [
    {
      name: 'AI Input',
      type: {
        system: 'http://terminology.hl7.org/CodeSystem/audit-entity-type',
        code: '2', // System Object
        display: 'System Object',
      },
      role: {
        system: 'http://terminology.hl7.org/CodeSystem/object-role',
        code: '13', // Security Resource
        display: 'Security Resource',
      },
      detail: [
        {
          type: 'promptHash',
          valueString: hashContent(data.prompt),
        },
        {
          type: 'operationType',
          valueString: data.operationType,
        },
      ],
    },
    {
      name: 'AI Output',
      type: {
        system: 'http://terminology.hl7.org/CodeSystem/audit-entity-type',
        code: '2', // System Object
        display: 'System Object',
      },
      role: {
        system: 'http://terminology.hl7.org/CodeSystem/object-role',
        code: '13', // Security Resource
        display: 'Security Resource',
      },
      detail: [
        {
          type: 'responseHash',
          valueString: hashContent(data.response),
        },
        {
          type: 'tokenCount',
          valueString: String(data.inputTokens + data.outputTokens),
        },
      ],
    },
  ];

  // Add patient entity if provided
  if (data.patientReference) {
    entities.push({
      what: {
        reference: data.patientReference,
      },
      type: {
        system: 'http://terminology.hl7.org/CodeSystem/audit-entity-type',
        code: '1', // Person
        display: 'Person',
      },
      role: {
        system: 'http://terminology.hl7.org/CodeSystem/object-role',
        code: '1', // Patient
        display: 'Patient',
      },
    });
  }

  // Add encounter entity if provided
  if (data.encounterReference) {
    entities.push({
      what: {
        reference: data.encounterReference,
      },
      type: {
        system: 'http://terminology.hl7.org/CodeSystem/audit-entity-type',
        code: '2', // System Object
        display: 'System Object',
      },
      role: {
        system: 'http://terminology.hl7.org/CodeSystem/object-role',
        code: '4', // Domain Resource
        display: 'Domain Resource',
      },
    });
  }

  // Build the AuditEvent resource
  const auditEvent: AuditEvent = {
    resourceType: 'AuditEvent',
    extension: buildAiExtensions(data),
    type: {
      system: AURA_AUDIT_EVENT_TYPE.system,
      code: AURA_AUDIT_EVENT_TYPE.code,
      display: AURA_AUDIT_EVENT_TYPE.display,
    },
    subtype: [
      {
        system: AURA_AUDIT_EVENT_TYPE.system,
        code: operationCoding.code,
        display: operationCoding.display,
      },
    ],
    action: 'E', // Execute
    recorded: DateTime.now().toISO() ?? new Date().toISOString(),
    outcome: data.outcome,
    outcomeDesc: data.errorMessage,
    agent: [
      {
        who: {
          reference: data.actorReference,
        },
        requestor: true,
        role: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                code: 'AUT',
                display: 'author',
              },
            ],
          },
        ],
      },
      {
        who: {
          display: data.modelVersion,
        },
        requestor: false,
        role: [
          {
            coding: [
              {
                system: AURA_AUDIT_EVENT_TYPE.system,
                code: 'ai-agent',
                display: 'AI Agent',
              },
            ],
          },
        ],
      },
    ],
    source: {
      observer: {
        reference: `Organization/${organizationId}`,
      },
      type: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/security-source-type',
          code: '4', // Application Server
          display: 'Application Server',
        },
      ],
    },
    entity: entities,
  };

  console.log(`[AuditLogger] [${data.correlationId}] Creating AI audit event`, {
    operationType: data.operationType,
    outcome: data.outcome,
    durationMs: data.durationMs,
  });

  const created = await oystehr.fhir.create<AuditEvent>(auditEvent);

  console.log(`[AuditLogger] [${data.correlationId}] Created audit event`, {
    id: created.id,
  });

  return created.id ?? 'unknown';
}

/**
 * Helper to log a successful AI interaction.
 */
export async function logAiSuccess(
  oystehr: Oystehr,
  input: Omit<AiAuditData, 'outcome' | 'errorMessage'>,
  secrets: Secrets | null
): Promise<string> {
  return logAiInteraction(
    oystehr,
    {
      ...input,
      outcome: '0', // Success
    },
    secrets
  );
}

/**
 * Helper to log a failed AI interaction.
 */
export async function logAiFailure(
  oystehr: Oystehr,
  input: Omit<AiAuditData, 'outcome'> & { errorMessage: string; isMinorFailure?: boolean },
  secrets: Secrets | null
): Promise<string> {
  return logAiInteraction(
    oystehr,
    {
      ...input,
      outcome: input.isMinorFailure ? '4' : '8', // Minor or Serious failure
    },
    secrets
  );
}

// Re-export types for convenience
export type {
  AiAuditData,
  AiAuditInput,
  AiAuditOutput,
  AiOperationType,
  AuditEventOutcome,
} from './audit-logger.types';
