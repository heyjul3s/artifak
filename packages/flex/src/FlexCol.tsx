import React from 'react';
import { FlexColBase } from './FlexColBase';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const FlexCol = React.forwardRef((props: any, ref) => {
  const baseColumnWidth = getColumnWidth(props.totalColumns);
  const columnOffset = setColumnOffset(baseColumnWidth, props.offset);
  const columnSizing = setColumnSizing(baseColumnWidth, props.columnSize);
  const gutterWidth = setGutterWidth(props.gutterWidth);

  return (
    <FlexColBase
      ml={columnOffset}
      maxWidth={columnSizing}
      flexBasis={columnSizing}
      pl={gutterWidth}
      pr={gutterWidth}
      style={{
        boxSizing: 'border-box'
      }}
      ref={ref}
      {...props}
    >
      {props.children}
    </FlexColBase>
  );
});

export function getColumnWidth(totalColumns = 12): number {
  return isNumber(totalColumns) && totalColumns > 2
    ? Number(parseFloat((100 / totalColumns).toString()).toFixed(2))
    : 100;
}

export function setColumnSizing(
  baseColumnWidth: number,
  columnSize: number | number[]
): string | string[] {
  return Array.isArray(columnSize) && columnSize.length > 1
    ? columnSize.map(
        size => `${parseNumberToTwoDecimals(size * baseColumnWidth)}%`
      )
    : `${parseNumberToTwoDecimals((columnSize as number) * baseColumnWidth)}%`;
}

export function setColumnOffset(
  baseColumnWidth: number,
  offset: number | number[]
): string | string[] | undefined {
  if (Array.isArray(offset) && offset.length > 1) {
    return offset.map(size => `${size * baseColumnWidth}%`);
  }

  if (!Array.isArray(offset) && !!offset) {
    return `${(offset as number) * baseColumnWidth}%`;
  }

  return void 0;
}

export function setGutterWidth(
  gutterWidth: number | number[] = 1
): string | string[] {
  return Array.isArray(gutterWidth) && gutterWidth.length > 1
    ? gutterWidth.map(width => `${width / 2}em`)
    : `${(gutterWidth as number) / 2}em`;
}

export function parseNumberToTwoDecimals(value: number): string {
  return `${parseFloat(String(value)).toFixed(2)}`;
}

export function isNumber(val: number): boolean {
  return !isNaN(val) && isFinite(val);
}
