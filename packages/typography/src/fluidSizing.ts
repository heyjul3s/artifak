export function fluidSizing(
  minElementSize: number,
  maxElementSize: number,
  minViewportWidth: number,
  maxViewportWidth: number
): string {
  return !!minElementSize &&
    !!maxElementSize &&
    !!minViewportWidth &&
    !!maxViewportWidth
    ? `calc(${minElementSize}px + (${maxElementSize} - ${minElementSize}) * ((100vw - ${minViewportWidth}px) / (${maxViewportWidth} - ${minViewportWidth})))`
    : '';
}
