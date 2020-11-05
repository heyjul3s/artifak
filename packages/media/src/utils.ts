export const isString = (arg: unknown): boolean =>
  Object.prototype.toString.call(arg) === '[object String]';

export const isNonEmptyString = (arg?: unknown): boolean =>
  isString(arg) && (arg as string).trim() !== '';
