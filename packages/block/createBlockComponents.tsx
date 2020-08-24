import { createComponents } from '@artifak/component-generator';
import isPlainObject from 'lodash.isplainobject';
import { BlockSystem } from './typings';
import { BlockBase } from './Block';

export function createBlockComponents<ST>(systemComponentStyles: ST) {
  if (
    isPlainObject(systemComponentStyles) &&
    Object.keys(systemComponentStyles).length
  ) {
    return createComponents<ST, { [key in keyof ST]: React.FC<BlockSystem> }>(
      BlockBase,
      systemComponentStyles
    );
  } else {
    return BlockBase;
  }
}
