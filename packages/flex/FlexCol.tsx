import React, { forwardRef } from 'react';
import { createFlexBase } from './FlexBase';

type Props = {
  totalColumns: number;
  offset: number | number[];
  columnSize: number | number[];
  gutterWidth: number;
  reverse: boolean;
};

export const StyledFlexCol = createFlexBase<Props>({
  boxSizing: 'border-box',
  position: 'relative',
  flex: '0 0 auto',
});

export const FlexCol = forwardRef((props: any, ref) => {
  const baseColumnWidth = getColumnWidth(props.totalColumns);
  const columnOffset = setColumnOffset(baseColumnWidth, props.offset);
  const columnSizing = setColumnSizing(baseColumnWidth, props.columnSize);
  const gutterWidth = setGutterWidth(props.gutterWidth);

  return (
    <StyledFlexCol
      ml={columnOffset}
      maxWidth={columnSizing}
      flexBasis={columnSizing}
      pl={gutterWidth}
      pr={gutterWidth}
      style={{
        border: '1px solid black',
      }}
      ref={ref}
      {...props}
    >
      {props.children}
    </StyledFlexCol>
  );
});

export function getColumnWidth(totalColumns: number = 12) {
  return isNumber(totalColumns) && totalColumns > 2
    ? Number(parseFloat((100 / totalColumns).toString()).toFixed(2))
    : 100;
}

export function setColumnSizing(
  baseColumnWidth: number,
  columnSize: number | number[]
) {
  return Array.isArray(columnSize) && columnSize.length > 1
    ? columnSize.map((size) => `${size * baseColumnWidth}%`)
    : `${(columnSize as number) * baseColumnWidth}%`;
}

export function setColumnOffset(
  baseColumnWidth: number,
  offset: number | number[]
) {
  if (Array.isArray(offset) && offset.length > 1) {
    return offset.map((size) => `${size * baseColumnWidth}%`);
  }

  if (!Array.isArray(offset) && !!offset) {
    return `${(offset as number) * baseColumnWidth}%`;
  }

  return void 0;
}

export function setGutterWidth(gutterWidth: number | number[] = 1) {
  return Array.isArray(gutterWidth) && gutterWidth.length > 1
    ? gutterWidth.map((width) => `${width / 2}em`)
    : `${(gutterWidth as number) / 2}em`;
}

export function isNumber(val: any) {
  return !isNaN(val) && isFinite(val);
}