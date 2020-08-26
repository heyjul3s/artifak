export interface Container {
  xs: string;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const containerWidth = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px'
};

export const container: string[] = [
  containerWidth.sm,
  containerWidth.md,
  containerWidth.lg,
  containerWidth.xl
];
