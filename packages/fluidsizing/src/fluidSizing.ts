export function fluidSizing(
  minElementSize: number,
  maxElementSize: number,
  minViewportWidth: number,
  maxViewportWidth: number,
  unit: 'em' | 'px' | 'rem'
): string {
  return !!minElementSize &&
    !!maxElementSize &&
    !!minViewportWidth &&
    !!maxViewportWidth &&
    !!unit
    ? `calc(${minElementSize}${unit} + (${maxElementSize} - ${minElementSize}) * ((100vw - ${minViewportWidth}${unit}) / (${maxViewportWidth} - ${minViewportWidth})))`
    : '';
}
