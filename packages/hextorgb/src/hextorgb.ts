import { RGBColor } from './typings';

export function hexToRGBA(hex: string, alpha: number = 1): string | undefined {
  if (!isValidHex(hex)) {
    return void 0;
  }

  const color = hexToRGB(hex);
  return `rgba(${color!.r}, ${color!.g}, ${color!.b}, ${alpha})`;
}

export function hexToRGB(hex: string): RGBColor | undefined {
  if (!isValidHex(hex)) {
    return void 0;
  }

  const normalizedHexValue = expandShorthandHex(hex);
  const hexValue = splitHexToRGB(normalizedHexValue);

  return {
    r: parseInt(hexValue![1], 16),
    g: parseInt(hexValue![2], 16),
    b: parseInt(hexValue![3], 16)
  };
}

export function splitHexToRGB(hex: string) {
  const HEX_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  return HEX_REGEX.exec(hex);
}

export function expandShorthandHex(hex: string): string {
  const SHORTHAND_REGEX = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  return hex.replace(
    SHORTHAND_REGEX,
    (match, r, g, b) => r + r + g + g + b + b
  );
}

export function isValidHex(hex: string) {
  const HEX_REGEX = /^#?([a-f\d]){3,6}$/i;
  return HEX_REGEX.test(hex);
}
