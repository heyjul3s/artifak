import { getPxNumericValue } from '@artifak/pxtoem';

export function pxToRem(size: number | string, baseSize = 16): string {
  const pxValue = getPxNumericValue(size);
  return `${pxValue / baseSize}rem`;
}
