import { createStyledComponent } from '@artifak/component-generator';

import {
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  grid
} from 'styled-system';

import { GridBaseProps } from './typings';

const gridStyleProps = [
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  grid
];

export const GridBase = createStyledComponent<GridBaseProps>({
  styleProps: gridStyleProps
});
