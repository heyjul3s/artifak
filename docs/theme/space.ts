enum SpaceSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl'
}

export type Space = {
  [key in SpaceSize]: number;
};

export const space: Space = {
  xs: spacing(2),
  sm: spacing(4),
  md: spacing(8),
  lg: spacing(16),
  xl: spacing(32),
  xxl: spacing(64)
};

export type Spacing = (multiplier: number) => number;

export function spacing(multiplier: number = 1): number {
  const DEFAULT_SPACING = 5;
  return DEFAULT_SPACING * multiplier;
}
