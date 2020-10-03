import { createStyledComponent } from '@artifak/component-generator';

import {
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  grid,
} from 'styled-system';

import type { GridBaseProps } from './typings';

export const GridBase = createStyledComponent<GridBaseProps>([
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  grid,
]);
