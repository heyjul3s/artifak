import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { TGridProps } from './typings';

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

// TODO: themes?
// TODO: variants?

const setGridColumnsAndRows = (
  columnWidth,
  columnLength,
  rowLength,
  rowHeight
) => {
  return {
    ...gridTemplateColumns(columnWidth, columnLength),
    ...gridTemplateRows(rowLength, rowHeight),
  };
};

const gridTemplateColumns = (
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

const setRepeatableColumnWidth = (columnWidth: string): object => ({
  gridTemplateColumns: `repeat(auto-fit, minmax(${columnWidth}, 1fr))`,
});

const setRepeatableColumnLength = (columnLength: number): object => ({
  gridTemplateColumns: `repeat(${columnLength}, 1fr)`,
});

const gridTemplateRows = (rowLength, rowHeight) =>
  rowLength && rowHeight ? setGridTemplateRows(rowLength, rowHeight) : {};

const setGridTemplateRows = (rowLength, rowHeight) => ({
  gridTemplateRows: `repeat(${rowLength}, ${rowHeight})`,
});

export const StyledGrid = styled('div')<TGridProps>(
  ({ columnWidth, columnLength, rowHeight, rowLength, gap = '1.5rem' }) => ({
    display: 'grid',
    gridGap: `${gap}`,
    ...setGridColumnsAndRows(columnWidth, columnLength, rowHeight, rowLength),
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

type TSomeGrid = {
  columnLength: number;
  rowLength: number;
  columnWidth: number;
  rowHeight: number;
  gap: number;
};

export const Grid = forwardRef(
  (
    {
      columnLength,
      columnWidth,
      rowLength,
      rowHeight,
      gap,
      ...props
    }: TSomeGrid,
    ref
  ) => (
    <StyledGrid
      columnWidth={columnWidth}
      columnLength={columnLength}
      rowLength={rowLength}
      rowHeight={rowHeight}
      ref={ref}
      {...props}
    />
  )
);
