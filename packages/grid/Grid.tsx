import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { TGrid, TGridProps } from './typings';

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

export const setGridColumnsAndRows = (columnWidth, columnLength) => ({
  ...gridTemplateColumns(columnWidth, columnLength),
});

export const gridTemplateColumns = (
  columnWidth: string,
  columnLength: number
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
  ({ columnWidth, columnLength, gap = '1.5rem' }) => ({
    display: 'grid',
    gridGap: `${gap}`,
    ...setGridColumnsAndRows(columnWidth, columnLength),
  }),

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

export const Grid = forwardRef(
  (
    { columnLength, columnWidth, rowLength, rowHeight, gap, ...props }: TGrid,
    ref
  ) => (
    <StyledGrid
      columnLength={columnLength}
      columnWidth={columnWidth}
      ref={ref}
      {...props}
    />
  )
);
