enum BreakpointKeys {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

type BreakpointWidths = {
  [key in BreakpointKeys]: string;
};

const breakpointWidths: BreakpointWidths = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

export const breakpoints: string[] = [
  breakpointWidths.sm,
  breakpointWidths.md,
  breakpointWidths.lg,
  breakpointWidths.xl
];
