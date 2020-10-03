import type { FlexboxProps } from 'styled-system';

import type { BaseComponentProps } from '@artifak/component-generator';

export type FlexRowBaseProps =
  | FlexRowCompProps
  | FlexboxProps
  | BaseComponentProps;

export type FlexRowCompProps = {
  reverse?: boolean;
};

export type FlexColBaseProps =
  | FlexColCompProps
  | FlexboxProps
  | BaseComponentProps;

export type FlexColCompProps = {
  totalColumns: number;
  offset: number | number[];
  columnSize: number | number[];
  gutterWidth: number;
  reverse: boolean;
};
