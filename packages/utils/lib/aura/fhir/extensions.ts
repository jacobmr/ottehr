/**
 * Aura FHIR Extensions
 *
 * Extension URL constants and helper functions for Aura-specific FHIR extensions.
 * These extensions store Aura metadata on FHIR resources like Task, CarePlan, etc.
 */

import type { DomainResource, Element, Extension } from 'fhir/r4b';
import type { AuraExtensionName, AuraExtensionValueMap } from '../types/extensions.types';

/**
 * Base URL for all Aura FHIR extensions
 * Follows Ottehr convention: https://fhir.ottehr.com/Extension/{name}
 */
export const AURA_EXTENSION_BASE_URL = 'https://fhir.ottehr.com/Extension/aura';

/**
 * Aura FHIR Extension URL definitions
 * Mirrors the FHIR_EXTENSION pattern from packages/utils/lib/fhir/constants.ts
 */
export const AURA_EXTENSION = {
  /** Care plan item state: active, new, modified, discontinued */
  status: {
    url: `${AURA_EXTENSION_BASE_URL}-status`,
  },
  /** Origin of item: clinician, ai, patient */
  source: {
    url: `${AURA_EXTENSION_BASE_URL}-source`,
  },
  /** Action destination: physician, ma, careManager, patient, caregiver, external */
  routingActor: {
    url: `${AURA_EXTENSION_BASE_URL}-routing-actor`,
  },
  /** Action category: prescription, lab, referral, task, notify */
  actionType: {
    url: `${AURA_EXTENSION_BASE_URL}-action-type`,
  },
  /** Approval state: pending, approved, rejected */
  approvalStatus: {
    url: `${AURA_EXTENSION_BASE_URL}-approval-status`,
  },
  /** AI certainty level: high, medium, low */
  aiConfidence: {
    url: `${AURA_EXTENSION_BASE_URL}-ai-confidence`,
  },
} as const;

/**
 * Type for the AURA_EXTENSION object
 */
export type AuraExtensionDefinition = typeof AURA_EXTENSION;

/**
 * Get an Aura extension value from a FHIR resource
 *
 * @param resource - The FHIR resource (or element with extensions)
 * @param extensionName - The Aura extension name key
 * @returns The extension value or undefined if not found
 *
 * @example
 * const status = getAuraExtension(task, 'status');
 * // status is AuraStatus | undefined
 *
 * @example
 * const actor = getAuraExtension(task, 'routingActor');
 * if (actor === 'physician') {
 *   // route to physician queue
 * }
 */
export function getAuraExtension<K extends AuraExtensionName>(
  resource: DomainResource | Element | { extension?: Extension[] },
  extensionName: K
): AuraExtensionValueMap[K] | undefined {
  const url = AURA_EXTENSION[extensionName].url;
  const ext = resource.extension?.find((e) => e.url === url);
  return ext?.valueCode as AuraExtensionValueMap[K] | undefined;
}

/**
 * Set an Aura extension value on a FHIR resource (mutates the resource)
 *
 * @param resource - The FHIR resource to modify
 * @param extensionName - The Aura extension name key
 * @param value - The value to set
 *
 * @example
 * setAuraExtension(task, 'status', 'approved');
 * setAuraExtension(task, 'routingActor', 'physician');
 */
export function setAuraExtension<K extends AuraExtensionName>(
  resource: DomainResource | { extension?: Extension[] },
  extensionName: K,
  value: AuraExtensionValueMap[K]
): void {
  const url = AURA_EXTENSION[extensionName].url;
  const newExt: Extension = { url, valueCode: value };

  if (!resource.extension) {
    resource.extension = [newExt];
    return;
  }

  const existingIndex = resource.extension.findIndex((e) => e.url === url);
  if (existingIndex >= 0) {
    resource.extension[existingIndex] = newExt;
  } else {
    resource.extension.push(newExt);
  }
}

/**
 * Remove an Aura extension from a FHIR resource (mutates the resource)
 *
 * @param resource - The FHIR resource to modify
 * @param extensionName - The Aura extension name key
 * @returns true if the extension was removed, false if it wasn't present
 *
 * @example
 * const wasRemoved = removeAuraExtension(task, 'aiConfidence');
 */
export function removeAuraExtension(
  resource: DomainResource | { extension?: Extension[] },
  extensionName: AuraExtensionName
): boolean {
  if (!resource.extension) {
    return false;
  }

  const url = AURA_EXTENSION[extensionName].url;
  const existingIndex = resource.extension.findIndex((e) => e.url === url);

  if (existingIndex >= 0) {
    resource.extension.splice(existingIndex, 1);
    return true;
  }

  return false;
}

/**
 * Check if a FHIR resource has an Aura extension
 *
 * @param resource - The FHIR resource to check
 * @param extensionName - The Aura extension name key
 * @returns true if the extension exists
 *
 * @example
 * if (hasAuraExtension(task, 'approvalStatus')) {
 *   // task has been processed
 * }
 */
export function hasAuraExtension(
  resource: DomainResource | Element | { extension?: Extension[] },
  extensionName: AuraExtensionName
): boolean {
  const url = AURA_EXTENSION[extensionName].url;
  return resource.extension?.some((e) => e.url === url) ?? false;
}

/**
 * Create a new resource with an Aura extension added (immutable)
 *
 * @param resource - The original FHIR resource
 * @param extensionName - The Aura extension name key
 * @param value - The value to set
 * @returns A new resource with the extension added
 *
 * @example
 * // For React state updates (immutable)
 * const updatedTask = withAuraExtension(task, 'status', 'approved');
 * setTask(updatedTask);
 */
export function withAuraExtension<T extends DomainResource | { extension?: Extension[] }, K extends AuraExtensionName>(
  resource: T,
  extensionName: K,
  value: AuraExtensionValueMap[K]
): T {
  const url = AURA_EXTENSION[extensionName].url;
  const newExt: Extension = { url, valueCode: value };

  const existingExtensions = resource.extension ?? [];
  const existingIndex = existingExtensions.findIndex((e) => e.url === url);

  let newExtensions: Extension[];
  if (existingIndex >= 0) {
    newExtensions = [...existingExtensions];
    newExtensions[existingIndex] = newExt;
  } else {
    newExtensions = [...existingExtensions, newExt];
  }

  return {
    ...resource,
    extension: newExtensions,
  };
}

/**
 * Create an Aura extension object
 *
 * @param extensionName - The Aura extension name key
 * @param value - The value for the extension
 * @returns A FHIR Extension object
 *
 * @example
 * const ext = createAuraExtension('routingActor', 'physician');
 * // { url: 'https://fhir.ottehr.com/Extension/aura-routing-actor', valueCode: 'physician' }
 */
export function createAuraExtension<K extends AuraExtensionName>(
  extensionName: K,
  value: AuraExtensionValueMap[K]
): Extension {
  return {
    url: AURA_EXTENSION[extensionName].url,
    valueCode: value,
  };
}
