import React, { HTMLAttributes } from 'react';
import { createBaseComponents, Settings } from '@artifak/component-generator';
import { BlockBaseProps } from './typings';
import { BlockBase } from './BlockBase';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function createBlockComponents<S, A = HTMLDivElement>(
  settings: { [key in keyof S]: Settings<HTMLAttributes<A>> }
): { [key in keyof any]: React.FC<BlockBaseProps> } {
  return createBaseComponents<S, BlockBaseProps, A>(BlockBase, settings);
}
