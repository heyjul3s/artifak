import { isString } from '@annexe/isstring';

export function isNonEmptyString(arg?: string): boolean {
  return isString(arg) && !!arg?.trim();
}
