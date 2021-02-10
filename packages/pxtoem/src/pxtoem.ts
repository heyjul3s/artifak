import { isString } from '@annexe/isstring';

export function pxToEm(size: number | string, baseSize = 16): string {
  const pxValue = getPxNumericValue(size);
  return `${pxValue / baseSize}em`;
}

export function getPxNumericValue(size: number | string): number {
  if (isString(size)) {
    return extractPxNumericValue(size as string);
  }

  if (!!size) {
    return size as number;
  }

  return 0;
}

export function extractPxNumericValue(size: string): number {
  const WORD_REGEX = /(\D*)$/i;
  return Number(size.replace(WORD_REGEX, ''));
}
