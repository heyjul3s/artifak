import { getHexColorRGBvalues } from '@artifak/hextorgb';

export function hexToRGBA(hex: string, alpha = 1): string | void {
  const color = getHexColorRGBvalues(hex);

  if (!!color) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
  }
}
