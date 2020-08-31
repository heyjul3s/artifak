import { flexbox, FlexboxProps, position, PositionProps } from 'styled-system';
import { createStyledComponent } from '@artifak/block';

type FlexColProps = {
  totalColumns: number;
  offset: number | number[];
  columnSize: number | number[];
  gutterWidth: number;
  reverse: boolean;
};

export const FlexColBase = createStyledComponent<
  FlexboxProps | FlexColProps | PositionProps
>(
  {
    boxSizing: 'border-box',
    position: 'relative',
    flex: '0 0 auto',
  },
  [flexbox, position]
);
