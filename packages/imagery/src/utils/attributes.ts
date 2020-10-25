import { isNonEmptyString } from './string';

export function imgSizes(srcset?: string, sizes?: string): string | undefined {
  return isNonEmptyString(srcset) && isNonEmptyString(sizes) ? sizes : void 0;
}
