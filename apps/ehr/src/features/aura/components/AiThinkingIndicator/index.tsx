/**
 * AiThinkingIndicator Component
 *
 * Visual feedback when AI is processing a request.
 * Shows progressive messages based on duration per UX spec.
 */

import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { auraPalette } from '../../theme';

export interface AiThinkingIndicatorProps {
  /** Whether the indicator is visible */
  visible: boolean;
  /** Custom message override */
  message?: string;
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
}

/** Time thresholds in milliseconds */
const SHOW_TEXT_THRESHOLD = 2000;
const SLOW_WARNING_THRESHOLD = 5000;

/**
 * AI thinking indicator with progressive messaging.
 *
 * - Shows pulse animation after 500ms
 * - Shows "Synthesizing..." after 2s
 * - Shows "Taking longer than usual" after 5s
 *
 * @example
 * ```tsx
 * <AiThinkingIndicator visible={isLoading} />
 * <AiThinkingIndicator visible={isLoading} message="Generating actions..." />
 * ```
 */
export const AiThinkingIndicator: FC<AiThinkingIndicatorProps> = ({ visible, message, size = 'medium' }) => {
  const [duration, setDuration] = useState(0);
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Track how long we've been showing the indicator
  useEffect(() => {
    if (!visible) {
      setDuration(0);
      return;
    }

    const interval = setInterval(() => {
      setDuration((d) => d + 500);
    }, 500);

    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) {
    return null;
  }

  // Determine message based on duration
  const displayMessage =
    message ?? (duration >= SLOW_WARNING_THRESHOLD ? 'Taking longer than usual...' : 'Synthesizing');

  const showText = duration >= SHOW_TEXT_THRESHOLD;

  // Size mappings
  const sizes = {
    small: { spinner: 16, fontSize: '0.75rem' },
    medium: { spinner: 24, fontSize: '0.875rem' },
    large: { spinner: 32, fontSize: '1rem' },
  };

  const { spinner: spinnerSize, fontSize } = sizes[size];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        padding: '8px 16px',
        borderRadius: 1,
        backgroundColor: `${auraPalette.aiAccent}10`,
        border: `1px solid ${auraPalette.aiAccent}40`,
        // Pulse animation unless reduced motion
        ...(!prefersReducedMotion && {
          animation: 'auraPulse 2s ease-in-out infinite',
          '@keyframes auraPulse': {
            '0%, 100%': {
              borderColor: `${auraPalette.aiAccent}40`,
            },
            '50%': {
              borderColor: `${auraPalette.aiAccent}`,
            },
          },
        }),
      }}
    >
      <CircularProgress
        size={spinnerSize}
        thickness={4}
        sx={{
          color: auraPalette.aiAccent,
          ...(prefersReducedMotion && {
            animation: 'none',
          }),
        }}
      />
      {showText && (
        <Typography
          sx={{
            fontSize,
            color: auraPalette.aiAccent,
            fontWeight: 500,
          }}
        >
          {displayMessage}
          {!prefersReducedMotion && <AnimatedDots />}
        </Typography>
      )}
    </Box>
  );
};

/**
 * Animated dots for the loading message.
 */
const AnimatedDots: FC = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? '' : d + '.'));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return <span style={{ width: '1.5em', display: 'inline-block' }}>{dots}</span>;
};

export default AiThinkingIndicator;
