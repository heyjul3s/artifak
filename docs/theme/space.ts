export type Spacing = (multiplier: number) => number;

export const spacing = (multiplier: number = 1): number => {
  const DEFAULT_SPACING = 5;
  return DEFAULT_SPACING * multiplier;
};

interface Space {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export const space: Space = {
  xs: spacing(2),
  sm: spacing(4),
  md: spacing(8),
  lg: spacing(16),
  xl: spacing(32),
  xxl: spacing(64),
};
