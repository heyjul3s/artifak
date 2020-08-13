import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { TGridItemProps } from './typings';

import {
  compose,
  gridArea,
  gridColumn,
  gridRow,
  justifySelf,
  alignSelf,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  space,
} from 'styled-system';

export const StyledGridItem = styled('div')<TGridItemProps>(
  compose(
    alignSelf,
    gridArea,
    gridRow,
    gridColumn,
    justifySelf,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    space
  )
);

export const GridItem = forwardRef((props, ref) => (
  <StyledGridItem {...props} ref={ref} />
));
