import { isNonEmptyString } from './string';

export function imgSizes(srcset?: string, sizes?: string) {
  return isNonEmptyString(srcset) && isNonEmptyString(sizes) ? sizes : void 0;
}
