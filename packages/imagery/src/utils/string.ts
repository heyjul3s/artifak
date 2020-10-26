export function isString(arg: unknown): boolean {
  return Object.prototype.toString.call(arg) === '[object String]';
}

export function isNonEmptyString(arg?: string): boolean {
  return isString(arg) && !!arg?.trim();
}
