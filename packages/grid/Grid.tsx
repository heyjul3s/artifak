import React from 'react';
import { GridBase } from './GridBase';

export const Grid = React.forwardRef((props: any, ref) => {
  const gridGap = addGridGap(props.gridGap);
  const gridTemplateColumns = setGridTemplateColumns(
    props.columnWidth,
    props.columnLength
  );

  return (
    <GridBase
      display="grid"
      gridGap={gridGap}
      gridTemplateColumns={gridTemplateColumns}
      ref={ref}
      {...props}
    >
      {props.children}
    </GridBase>
  );
});

export function addGridGap(gridGap: string | undefined) {
  return !!gridGap ? gridGap : '1.5rem';
}

export const setGridTemplateColumns = (
  columnWidth?: string | string[],
  columnLength?: number | number[]
): string | string[] => {
  if (columnWidth) {
    return setRepeatableColumnWidths(columnWidth);
  }

  if (columnLength) {
    return setRepeatableColumnLengths(columnLength);
  }

  return '';
};

export function setRepeatableColumnWidths(
  columnWidth: string | string[]
): string | string[] {
  if (Array.isArray(columnWidth) && columnWidth.length) {
    return columnWidth.map((width) => {
      return repeatableColumnWidth(width);
    });
  } else {
    return repeatableColumnWidth(columnWidth as string);
  }
}

export function repeatableColumnWidth(columnWidth: string): string {
  return `repeat(auto-fit, minmax(${columnWidth}, 1fr))`;
}

export function setRepeatableColumnLengths(
  columnLength: number | number[]
): string | string[] {
  if (Array.isArray(columnLength) && columnLength.length) {
    return columnLength.map((length) => {
      return repeatableColumnLength(length);
    });
  } else {
    return repeatableColumnLength(columnLength as number);
  }
}

export function repeatableColumnLength(columnLength: number): string {
  return `repeat(${columnLength}, 1fr)`;
}
