import { FlexboxProps, PositionProps } from 'styled-system';

export type FlexRowBaseProps = FlexRowCompProps & FlexboxProps;

export type FlexRowCompProps = {
  reverse?: boolean;
};

export type FlexColBaseProps =
  | (FlexColCompProps & FlexboxProps)
  | PositionProps;

export type FlexColCompProps = {
  totalColumns: number;
  offset: number | number[];
  columnSize: number | number[];
  gutterWidth: number;
  reverse: boolean;
};
