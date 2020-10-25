export function isString(arg: any): boolean {
  return Object.prototype.toString.call(arg) === '[object String]';
}

export function isNonEmptyString(arg: any): boolean {
  return isString(arg) && arg.trim() !== '';
}
