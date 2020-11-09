import { createStyledComponent } from '@artifak/component-generator';

import {
  gridArea,
  gridColumn,
  gridRow,
  justifySelf,
  alignSelf
} from 'styled-system';

import { GridItemBaseProps } from './typings';

export const GridItemBase = createStyledComponent<GridItemBaseProps>({}, {}, [
  alignSelf,
  gridArea,
  gridRow,
  gridColumn,
  justifySelf
]);
