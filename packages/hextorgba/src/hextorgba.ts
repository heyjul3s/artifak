import { getRGBvalues } from '@artifak/hextorgb';

export function hexToRGBA(hex: string, alpha = 1): string | void {
  const color = getRGBvalues(hex);

  if (!!color) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
  }
}
