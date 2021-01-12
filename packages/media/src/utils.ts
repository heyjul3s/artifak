export function isString(arg: unknown): boolean {
  return Object.prototype.toString.call(arg) === '[object String]';
}

export function isNonEmptyString(arg?: unknown): boolean {
  return isString(arg) && (arg as string).trim() !== '';
}
