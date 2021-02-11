import { RGBColor } from './typings';

export function hexToRGB(hex: string): string | void {
  const color = getRGBvalues(hex);

  if (!!color) {
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
  }
}

export function getRGBvalues(hex: string): RGBColor | void {
  const hexValue = formatHexValue(hex);

  if (!!hexValue) {
    return {
      r: parseInt(hexValue[1], 16),
      g: parseInt(hexValue[2], 16),
      b: parseInt(hexValue[3], 16)
    };
  }
}

export function formatHexValue(
  hex: string
): RegExpExecArray | null | undefined {
  if (!isValidHex(hex)) {
    return void 0;
  }

  const normalizedHexValue = expandShorthandHex(hex);
  return splitHexToRGB(normalizedHexValue);
}

export function splitHexToRGB(hex: string): RegExpExecArray | null {
  const HEX_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  return HEX_REGEX.exec(hex);
}

export function expandShorthandHex(hex: string): string {
  const SHORTHAND_REGEX = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  return hex.replace(SHORTHAND_REGEX, (_, r, g, b) => r + r + g + g + b + b);
}

export function isValidHex(hex: string): boolean {
  const HEX_REGEX = /^#?([a-f\d]){3,6}$/i;
  return HEX_REGEX.test(hex);
}
