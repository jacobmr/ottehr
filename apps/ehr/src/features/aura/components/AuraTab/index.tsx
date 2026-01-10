/**
 * Aura Tab
 *
 * Main tab component for Aura AI features in the encounter view.
 * Displays pre-visit synthesis, AI-generated insights, and action items.
 */

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { useSynthesisStore } from '../../stores';
import type { PreVisitSynthesis } from '../../types';
import { AiThinkingIndicator } from '../AiThinkingIndicator';
import { AuraBadge } from '../AuraBadge';
import { SynthesisCard } from '../SynthesisCard';

/**
 * Mock synthesis data for POC demonstration.
 */
const MOCK_SYNTHESIS: PreVisitSynthesis = {
  id: 'synth-demo-001',
  patientReference: 'Patient/demo-patient-001',
  encounterReference: 'Encounter/demo-encounter-001',
  patientConcerns: [
    {
      id: 'concern-001',
      text: 'Persistent cough for 2 weeks',
      priority: 'high',
      category: 'symptom',
      capturedAt: new Date().toISOString(),
    },
    {
      id: 'concern-002',
      text: 'Mild fever in the evenings',
      priority: 'medium',
      category: 'symptom',
      capturedAt: new Date().toISOString(),
    },
  ],
  keyMetrics: [
    {
      label: 'Last Visit',
      value: '3 months ago',
      trend: 'stable',
    },
    {
      label: 'Active Medications',
      value: '2',
      trend: 'stable',
    },
    {
      label: 'Open Care Gaps',
      value: '1',
      trend: 'down',
    },
  ],
  qualityGaps: [
    {
      id: 'gap-HBA1C-001',
      description: 'HbA1c Test overdue',
      measureName: 'HbA1c Test',
      dueDate: '2025-03-15',
      priority: 'high',
    },
  ],
  summary:
    'Patient presents with respiratory symptoms. Recent history shows well-controlled chronic conditions. One quality gap requires attention: HbA1c screening is overdue.',
  modelVersion: 'claude-3-5-sonnet-20241022',
  generatedAt: new Date().toISOString(),
  correlationId: 'poc-demo-correlation-001',
};

/**
 * AuraTab component props.
 */
interface AuraTabProps {
  /**
   * Patient's first name for personalization.
   */
  patientFirstName?: string;
}

/**
 * Main Aura tab component for the encounter view.
 * Shows pre-visit synthesis and AI-generated content.
 */
export const AuraTab: FC<AuraTabProps> = ({ patientFirstName = 'Patient' }) => {
  const { synthesis, loadingState, error } = useSynthesisStore();

  // Use mock data for POC when no real data is available
  const displaySynthesis = synthesis ?? MOCK_SYNTHESIS;
  const isLoading = loadingState === 'loading';
  const hasError = loadingState === 'error';

  return (
    <Box sx={{ p: 2 }}>
      <Stack spacing={3}>
        {/* Header with Aura badge */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <AuraBadge />
          <Typography variant="h6" component="h2">
            AI-Powered Clinical Insights
          </Typography>
        </Stack>

        {/* AI thinking indicator - shown during loading */}
        <AiThinkingIndicator visible={isLoading} size="medium" />

        {/* Pre-visit synthesis card */}
        {!isLoading && (
          <SynthesisCard
            synthesis={displaySynthesis}
            loading={false}
            error={hasError ? error?.message : null}
            patientFirstName={patientFirstName}
          />
        )}

        {/* Placeholder for future action items panel */}
        {!isLoading && !hasError && (
          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              bgcolor: 'grey.50',
              border: '1px dashed',
              borderColor: 'grey.300',
            }}
          >
            <Typography variant="body2" color="text.secondary" textAlign="center">
              Action items panel will appear here in future iterations.
            </Typography>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default AuraTab;
