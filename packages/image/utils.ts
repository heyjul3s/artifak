export const supportsObjectFit =
  !!(window as any).CSS &&
  !!CSS.supports &&
  !!CSS.supports('object-fit', 'cover') &&
  !!CSS.supports('object-position', '0 0');

export const isString = (arg: any): boolean =>
  Object.prototype.toString.call(arg) === '[object String]';

export const isNonEmptyString = (arg: any): boolean =>
  isString(arg) && arg.trim() !== '';
