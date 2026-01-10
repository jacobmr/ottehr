/**
 * SynthesisCard Component
 *
 * Displays AI-synthesized pre-visit context including patient concerns,
 * key metrics, and quality gaps.
 */

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Box, Card, CardContent, Chip, Collapse, Divider, IconButton, Skeleton, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { auraPalette, statusColors } from '../../theme';
import type { KeyMetric, PatientConcern, PreVisitSynthesis, QualityGap } from '../../types';
import { AiThinkingIndicator } from '../AiThinkingIndicator';
import { AuraBadge } from '../AuraBadge';

export interface SynthesisCardProps {
  /** Synthesis data to display */
  synthesis?: PreVisitSynthesis | null;
  /** Whether synthesis is loading */
  loading?: boolean;
  /** Error message if synthesis failed */
  error?: string | null;
  /** Patient's first name for personalized headers */
  patientFirstName?: string;
}

/**
 * Card displaying AI-synthesized pre-visit context.
 *
 * @example
 * ```tsx
 * <SynthesisCard
 *   synthesis={synthesisData}
 *   loading={isLoading}
 *   patientFirstName="Eleanor"
 * />
 * ```
 */
export const SynthesisCard: FC<SynthesisCardProps> = ({
  synthesis,
  loading = false,
  error,
  patientFirstName = 'Patient',
}) => {
  const [expanded, setExpanded] = useState(false);

  // Error state
  if (error) {
    return (
      <Card
        sx={{
          borderLeft: `4px solid ${statusColors.discontinued}`,
          backgroundColor: '#FEF3F2',
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <WarningAmberIcon sx={{ color: statusColors.discontinued }} />
            <Typography variant="body2" color="error">
              Unable to synthesize - manual review needed
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }

  // Loading state
  if (loading) {
    return (
      <Card
        sx={{
          borderLeft: `4px solid ${auraPalette.aiAccent}`,
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Skeleton width={150} height={24} />
            <AuraBadge compact />
          </Box>
          <AiThinkingIndicator visible size="small" />
          <Box sx={{ mt: 2 }}>
            <Skeleton width="100%" height={20} />
            <Skeleton width="80%" height={20} />
            <Skeleton width="60%" height={20} />
          </Box>
        </CardContent>
      </Card>
    );
  }

  // Empty state
  if (!synthesis) {
    return (
      <Card
        sx={{
          borderLeft: `4px solid ${auraPalette.surfaceVariant}`,
        }}
      >
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            No pre-visit synthesis available
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        borderLeft: `4px solid ${auraPalette.aiAccent}`,
      }}
    >
      <CardContent>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Pre-Visit Summary
          </Typography>
          <AuraBadge />
        </Box>

        {/* Patient Concerns Section */}
        {synthesis.patientConcerns.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: auraPalette.primary }}>
              What {patientFirstName} wants to discuss
            </Typography>
            {synthesis.patientConcerns.map((concern) => (
              <ConcernItem key={concern.id} concern={concern} />
            ))}
          </Box>
        )}

        {/* Key Metrics Section */}
        {synthesis.keyMetrics.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Key Metrics
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {synthesis.keyMetrics.map((metric, idx) => (
                <MetricItem key={idx} metric={metric} />
              ))}
            </Box>
          </Box>
        )}

        {/* Quality Gaps Section */}
        {synthesis.qualityGaps.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Quality Gaps
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {synthesis.qualityGaps.map((gap) => (
                <GapChip key={gap.id} gap={gap} />
              ))}
            </Box>
          </Box>
        )}

        <Divider sx={{ my: 2 }} />

        {/* Expand for citations */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            size="small"
            sx={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
          <Typography variant="caption" color="text.secondary">
            {expanded ? 'Hide details' : 'Show basis for synthesis'}
          </Typography>
        </Box>

        <Collapse in={expanded}>
          <Box sx={{ mt: 2, p: 2, backgroundColor: auraPalette.surfaceVariant, borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              {synthesis.summary}
            </Typography>
            <Typography variant="caption" display="block" sx={{ mt: 1, fontStyle: 'italic' }}>
              Generated by {synthesis.modelVersion} at {new Date(synthesis.generatedAt).toLocaleString()}
            </Typography>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

/**
 * Individual patient concern item.
 */
const ConcernItem: FC<{ concern: PatientConcern }> = ({ concern }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 1,
      mb: 1,
      p: 1.5,
      backgroundColor: `${auraPalette.aiAccent}08`,
      borderRadius: 1,
      borderLeft: `3px solid ${auraPalette.aiAccent}`,
    }}
  >
    <FormatQuoteIcon sx={{ fontSize: 18, color: auraPalette.aiAccent, mt: 0.25 }} />
    <Box>
      <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
        "{concern.text}"
      </Typography>
      {concern.priority === 'high' && (
        <Chip label="High Priority" size="small" sx={{ mt: 0.5, height: 20, fontSize: '0.7rem' }} color="error" />
      )}
    </Box>
  </Box>
);

/**
 * Key metric display item.
 */
const MetricItem: FC<{ metric: KeyMetric }> = ({ metric }) => {
  const TrendIcon =
    metric.trend === 'up' ? TrendingUpIcon : metric.trend === 'down' ? TrendingDownIcon : TrendingFlatIcon;

  return (
    <Box
      sx={{
        p: 1.5,
        backgroundColor: metric.needsAttention ? '#FEF3F2' : auraPalette.surfaceVariant,
        borderRadius: 1,
        minWidth: 100,
        border: metric.needsAttention ? `1px solid ${statusColors.discontinued}` : 'none',
      }}
    >
      <Typography variant="caption" color="text.secondary">
        {metric.label}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {metric.value}
          {metric.unit && (
            <Typography component="span" variant="caption">
              {' '}
              {metric.unit}
            </Typography>
          )}
        </Typography>
        {metric.trend && (
          <TrendIcon
            sx={{
              fontSize: 16,
              color:
                metric.trend === 'up'
                  ? statusColors.new
                  : metric.trend === 'down'
                  ? statusColors.discontinued
                  : 'text.secondary',
            }}
          />
        )}
      </Box>
    </Box>
  );
};

/**
 * Quality gap chip.
 */
const GapChip: FC<{ gap: QualityGap }> = ({ gap }) => (
  <Chip
    label={gap.description}
    size="small"
    sx={{
      backgroundColor:
        gap.priority === 'high' ? '#FEE4E2' : gap.priority === 'medium' ? '#FEF0C7' : auraPalette.surfaceVariant,
      color: gap.priority === 'high' ? '#B42318' : gap.priority === 'medium' ? '#B54708' : 'text.primary',
    }}
  />
);

export default SynthesisCard;
