import React from 'react';
import { createBaseComponents } from '@artifak/component-generator';
import { BlockBaseProps } from './typings';
import { BlockBase } from './BlockBase';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function createBlockComponents<ST>(
  styles: ST
): { [key in keyof any]: React.FC<BlockBaseProps> } {
  return createBaseComponents<ST, BlockBaseProps>(BlockBase, styles);
}
