export function pxToEm(size: number, baseSize = 16): string {
  return `${size / baseSize}em`;
}
