import React from 'react';
import { createBaseComponents } from '@artifak/component-generator';
import { BlockBaseProps } from './typings';
import { BlockBase } from './BlockBase';

export function createBlockComponents<S>(
  styles: S
): { [key in keyof any]: React.ComponentType<BlockBaseProps> } {
  return createBaseComponents<S, BlockBaseProps>(BlockBase, styles);
}
