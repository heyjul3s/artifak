import { isString } from '@annexe/isstring';

export function isNonEmptyString(arg?: unknown): boolean {
  return isString(arg) && (arg as string).trim() !== '';
}
