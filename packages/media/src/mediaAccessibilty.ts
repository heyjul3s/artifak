export enum MediaAccessibilityKeys {
  darkColorScheme = 'darkColorScheme',
  lightColorScheme = 'lightColorScheme',
  reducedMotion = 'reducedMotion',
  reducedMotionAny = 'reducedMotionAny'
}

export type MediaAccessibilityQueries = {
  [MediaAccessibilityKeys.darkColorScheme]: DarkColorScheme;
  [MediaAccessibilityKeys.lightColorScheme]: LightColorScheme;
  [MediaAccessibilityKeys.reducedMotion]: ReducedMotion;
  [MediaAccessibilityKeys.reducedMotionAny]: ReducedMotionNoPreference;
};

export type DarkColorScheme = 'prefers-color-scheme: dark';
export type LightColorScheme = 'prefers-color-scheme: light';
export type ReducedMotion = 'prefers-reduced-motion: reduce';
export type ReducedMotionNoPreference = 'prefers-reduced-motion: no-preference';

export const mediaAccessibilityQueries: MediaAccessibilityQueries = {
  [MediaAccessibilityKeys.darkColorScheme]: 'prefers-color-scheme: dark',
  [MediaAccessibilityKeys.lightColorScheme]: 'prefers-color-scheme: light',
  [MediaAccessibilityKeys.reducedMotion]: 'prefers-reduced-motion: reduce',
  [MediaAccessibilityKeys.reducedMotionAny]:
    'prefers-reduced-motion: no-preference'
};
