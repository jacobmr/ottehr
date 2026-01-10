/**
 * AuraBadge Component
 *
 * Visual indicator that Aura AI assistant is active.
 */

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Box, Chip, Typography } from '@mui/material';
import { FC } from 'react';
import { auraPalette } from '../../theme';

export interface AuraBadgeProps {
  /** Whether to show in compact mode */
  compact?: boolean;
  /** Optional label override */
  label?: string;
}

/**
 * Badge indicating Aura AI assistant is active.
 *
 * @example
 * ```tsx
 * <AuraBadge />
 * <AuraBadge compact />
 * <AuraBadge label="AI Powered" />
 * ```
 */
export const AuraBadge: FC<AuraBadgeProps> = ({ compact = false, label = 'Aura' }) => {
  if (compact) {
    return (
      <Box
        sx={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          backgroundColor: auraPalette.aiAccent,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        title="Aura AI Assistant"
      >
        <AutoAwesomeIcon sx={{ fontSize: 14, color: 'white' }} />
      </Box>
    );
  }

  return (
    <Chip
      icon={<AutoAwesomeIcon sx={{ fontSize: 16, color: 'white !important' }} />}
      label={
        <Typography variant="caption" sx={{ fontWeight: 600, color: 'white' }}>
          {label}
        </Typography>
      }
      size="small"
      sx={{
        backgroundColor: auraPalette.aiAccent,
        '&:hover': {
          backgroundColor: auraPalette.aiAccent,
        },
        '& .MuiChip-icon': {
          marginLeft: '8px',
        },
      }}
    />
  );
};

export default AuraBadge;
