import styled from 'styled-components';
import { TGridProps, TGridItemProps } from './types';

import {
  compose,
  display,
  grid,
  gridArea,
  gridColumn,
  gridRow,
  justifyItems,
  justifySelf,
  justifyContent,
  alignItems,
  alignSelf,
  alignContent,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  space,
} from 'styled-system';

export const GridSystem = styled.div<TGridProps>(
  compose(
    display,
    grid,
    space,
    alignItems,
    alignContent,
    justifyItems,
    justifyContent
  )
);

export const GridItemSystem = styled.div<TGridItemProps>(
  compose(
    gridArea,
    gridRow,
    gridColumn,
    alignSelf,
    justifySelf,
    space,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth
  )
);
