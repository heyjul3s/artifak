export function isString(arg: any) {
  return Object.prototype.toString.call(arg) === '[object String]';
}

export function isNonEmptyString(arg: any) {
  return isString(arg) && arg.trim() !== '';
}
