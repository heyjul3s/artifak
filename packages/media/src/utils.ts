export const isString = (arg): boolean =>
  Object.prototype.toString.call(arg) === '[object String]';

export const isNonEmptyString = (arg): boolean =>
  isString(arg) && arg.trim() !== '';
