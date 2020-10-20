import React from 'react';
import { createBaseComponents } from '@artifak/component-generator';
import type { BlockBaseProps } from './typings';
import { BlockBase } from './BlockBase';

export function createBlockComponents<ST>(
  styles: ST
): { [key in keyof any]: React.FC<BlockBaseProps> } {
  return createBaseComponents<ST, BlockBaseProps>(BlockBase, styles);
}
