/**
 * Aura Demo Page
 *
 * Standalone demo showcasing Aura AI components without authentication.
 * Access via /aura-demo route when AURA_ENABLED is true.
 */

import { Box, Container, Paper, Stack, Tab, Tabs, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { AiThinkingIndicator, AuraBadge, SynthesisCard } from '../components';
import { auraPalette } from '../theme/palette';
import type { PreVisitSynthesis } from '../types';

/**
 * Mock synthesis data for demonstration.
 */
const DEMO_SYNTHESIS: PreVisitSynthesis = {
  id: 'synth-demo-001',
  patientReference: 'Patient/demo-patient-001',
  encounterReference: 'Encounter/demo-encounter-001',
  patientConcerns: [
    {
      id: 'concern-001',
      text: 'Persistent cough for 2 weeks, worse at night',
      priority: 'high',
      category: 'symptom',
      capturedAt: new Date().toISOString(),
    },
    {
      id: 'concern-002',
      text: 'Mild fever in the evenings, around 99-100F',
      priority: 'medium',
      category: 'symptom',
      capturedAt: new Date().toISOString(),
    },
    {
      id: 'concern-003',
      text: 'Want to discuss diabetes management',
      priority: 'medium',
      category: 'chronic-condition',
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
      value: '4',
      trend: 'up',
    },
    {
      label: 'A1C (Last)',
      value: '7.2',
      unit: '%',
      trend: 'down',
      needsAttention: false,
    },
    {
      label: 'BP (Last)',
      value: '138/88',
      unit: 'mmHg',
      trend: 'up',
      needsAttention: true,
    },
  ],
  qualityGaps: [
    {
      id: 'gap-HBA1C-001',
      description: 'HbA1c Test - due in 2 weeks',
      measureName: 'Diabetes: HbA1c Control',
      dueDate: '2025-02-01',
      priority: 'high',
    },
    {
      id: 'gap-EYE-001',
      description: 'Diabetic Eye Exam - overdue',
      measureName: 'Diabetes: Eye Exam',
      dueDate: '2024-12-15',
      priority: 'high',
    },
    {
      id: 'gap-FLU-001',
      description: 'Flu Vaccination',
      measureName: 'Preventive Care: Influenza',
      dueDate: '2025-03-31',
      priority: 'medium',
    },
  ],
  summary:
    'Patient Eleanor presents with upper respiratory symptoms (cough, low-grade fever) for 2 weeks. History of well-controlled Type 2 Diabetes (A1C 7.2%). Recent BP trending upward. Two high-priority quality gaps require attention: HbA1c test due soon and diabetic eye exam overdue.',
  modelVersion: 'claude-3-5-sonnet-20241022',
  generatedAt: new Date().toISOString(),
  correlationId: 'demo-correlation-001',
};

/**
 * Demo page showcasing Aura AI components.
 */
export const AuraDemo: FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showLoading, setShowLoading] = useState(false);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number): void => {
    setActiveTab(newValue);
  };

  const simulateLoading = (): void => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 3000);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Paper sx={{ p: 3, mb: 3, borderLeft: `4px solid ${auraPalette.primary}` }}>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <AuraBadge />
            <Typography variant="h4" sx={{ fontWeight: 600, color: auraPalette.primary }}>
              Aura AI Demo
            </Typography>
          </Stack>
          <Typography variant="body1" color="text.secondary">
            This demo showcases the Aura AI-native clinical experience components. These components will be integrated
            into the EHR encounter view to provide AI-powered pre-visit synthesis and clinical decision support.
          </Typography>
        </Paper>

        {/* Tab Navigation */}
        <Paper sx={{ mb: 3 }}>
          <Tabs value={activeTab} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tab label="Pre-Visit Synthesis" />
            <Tab label="Loading States" />
            <Tab label="Component Gallery" />
          </Tabs>
        </Paper>

        {/* Tab Content */}
        {activeTab === 0 && (
          <Stack spacing={3}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Pre-Visit Synthesis Card
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              This card displays AI-synthesized patient context including concerns captured during pre-visit intake, key
              health metrics, and identified quality gaps.
            </Typography>
            <SynthesisCard synthesis={DEMO_SYNTHESIS} patientFirstName="Eleanor" />
          </Stack>
        )}

        {activeTab === 1 && (
          <Stack spacing={3}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Loading & Thinking States
            </Typography>

            <Paper sx={{ p: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                AI Thinking Indicator (click to simulate)
              </Typography>
              <Box
                onClick={simulateLoading}
                sx={{ cursor: 'pointer', p: 2, bgcolor: '#fafafa', borderRadius: 1, mb: 2 }}
              >
                <AiThinkingIndicator visible={showLoading} size="medium" />
                {!showLoading && (
                  <Typography variant="body2" color="text.secondary">
                    Click to simulate 3-second loading...
                  </Typography>
                )}
              </Box>
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                Synthesis Card - Loading State
              </Typography>
              <SynthesisCard loading={true} patientFirstName="Eleanor" />
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                Synthesis Card - Error State
              </Typography>
              <SynthesisCard error="Failed to generate synthesis" patientFirstName="Eleanor" />
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                Synthesis Card - Empty State
              </Typography>
              <SynthesisCard synthesis={null} patientFirstName="Eleanor" />
            </Paper>
          </Stack>
        )}

        {activeTab === 2 && (
          <Stack spacing={3}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Component Gallery
            </Typography>

            <Paper sx={{ p: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                Aura Badge Variants
              </Typography>
              <Stack direction="row" spacing={3} alignItems="center">
                <Box>
                  <Typography variant="caption" display="block" sx={{ mb: 1 }}>
                    Default
                  </Typography>
                  <AuraBadge />
                </Box>
                <Box>
                  <Typography variant="caption" display="block" sx={{ mb: 1 }}>
                    Compact
                  </Typography>
                  <AuraBadge compact />
                </Box>
                <Box>
                  <Typography variant="caption" display="block" sx={{ mb: 1 }}>
                    Custom Label
                  </Typography>
                  <AuraBadge label="AI Generated" />
                </Box>
              </Stack>
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                AI Thinking Indicator Sizes
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="caption" display="block" sx={{ mb: 1 }}>
                    Small
                  </Typography>
                  <AiThinkingIndicator visible size="small" />
                </Box>
                <Box>
                  <Typography variant="caption" display="block" sx={{ mb: 1 }}>
                    Medium
                  </Typography>
                  <AiThinkingIndicator visible size="medium" />
                </Box>
                <Box>
                  <Typography variant="caption" display="block" sx={{ mb: 1 }}>
                    Large
                  </Typography>
                  <AiThinkingIndicator visible size="large" />
                </Box>
              </Stack>
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                Color Palette
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                {Object.entries(auraPalette).map(([name, color]) => (
                  <Box key={name} sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        bgcolor: color,
                        borderRadius: 1,
                        border: '1px solid #ddd',
                        mb: 0.5,
                      }}
                    />
                    <Typography variant="caption" display="block">
                      {name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {color}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Stack>
        )}

        {/* Footer */}
        <Paper sx={{ p: 2, mt: 4, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            Aura POC Demo - Epic 2: Pre-Visit Patient Input & Care Context
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default AuraDemo;
