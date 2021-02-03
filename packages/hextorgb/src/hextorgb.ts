import { RGBColor } from './typings';

export function hexToRGBA(hex: string, alpha: number = 1): string | undefined {
  const color = hexToRGB(hex);

  return !!color
    ? `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`
    : void 0;
}

export function hexToRGB(hex: string): RGBColor | undefined {
  const normalizedHexValue = normalizeHex(hex);
  const hexValue = validateHex(normalizedHexValue);

  return hexValue
    ? {
        r: parseInt(hexValue[1], 16),
        g: parseInt(hexValue[2], 16),
        b: parseInt(hexValue[3], 16)
      }
    : void 0;
}

export function validateHex(hex: string) {
  const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  return hexRegex.exec(hex);
}

export function normalizeHex(hex: string): string {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  return hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
}
