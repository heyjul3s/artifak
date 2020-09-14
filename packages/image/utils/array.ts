import isEmpty from 'lodash.isempty';

export function isNonEmptyArray(val: any) {
  return Array.isArray(val) && !isEmpty(val);
}
