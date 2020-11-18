import { createStyledComponent } from '@artifak/component-generator';

import {
  gridArea,
  gridColumn,
  gridRow,
  justifySelf,
  alignSelf
} from 'styled-system';

import { GridItemBaseProps } from './typings';

const gridItemStyleProps = [
  alignSelf,
  gridArea,
  gridRow,
  gridColumn,
  justifySelf
];

export const GridItemBase = createStyledComponent<GridItemBaseProps>({
  styleProps: gridItemStyleProps
});
