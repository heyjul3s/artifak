import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { TGridStyles, TGrid, TGridProps } from './typings';

import {
  compose,
  display,
  grid,
  justifyItems,
  justifyContent,
  alignItems,
  alignContent,
  space,
} from 'styled-system';

export const setGridStyles = ({
  columnWidth = void 0,
  columnLength = void 0,
  gap = '1.5rem',
}: TGridStyles) => ({
  display: 'grid',
  gridGap: `${gap}`,
  ...gridTemplateColumns(columnWidth, columnLength),
});

export const gridTemplateColumns = (
  columnWidth: string | undefined = void 0,
  columnLength: number | undefined = void 0
): object => {
  if (columnWidth) {
    return setRepeatableColumnWidth(columnWidth);
  }

  if (columnLength) {
    return setRepeatableColumnLength(columnLength);
  }

  return {};
};

export const setRepeatableColumnWidth = (columnWidth: string): object => ({
  gridTemplateColumns: `repeat(auto-fit, minmax(${columnWidth}, 1fr))`,
});

export const setRepeatableColumnLength = (columnLength: number): object => ({
  gridTemplateColumns: `repeat(${columnLength}, 1fr)`,
});

export const StyledGrid = styled('div')<TGridProps>(
  setGridStyles,

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

export const Grid = forwardRef((props: any, ref) => (
  <StyledGrid
    columnLength={props.columnLength}
    columnWidth={props.columnWidth}
    ref={ref}
    {...props}
  >
    {props.children}
  </StyledGrid>
));
