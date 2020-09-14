import isPlainObject from 'lodash.isplainobject';
import { isNonEmptyArray } from './array';

export function isNonEmptyPlainObject(val: any) {
  return isPlainObject(val) && Object.keys(val).length >= 1;
}

export function getTargetObjectProps(targetKeys: string[], props) {
  return isNonEmptyArray(targetKeys) && isNonEmptyPlainObject(props)
    ? Object.keys(props).reduce((acc, curr) => {
        if (targetKeys.includes(curr) && !!props[curr]) {
          acc[curr] = props[curr];
        }

        return acc;
      }, {})
    : {};
}
