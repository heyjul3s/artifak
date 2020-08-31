import { flexbox, FlexBoxProps, position, PositionProps } from 'styled-system';
import { createBaseComponent } from '@artifak/block';

type FlexRowProps = {
  reverse?: boolean;
};

export const FlexRowBase = createBaseComponent<FlexBoxProps | FlexRowProps>(
  {
    display: 'flex',
    flex: '0 1 auto',
    flexWrap: 'wrap',
  },
  [flexbox]
);

type FlexColProps = {
  totalColumns: number;
  offset: number | number[];
  columnSize: number | number[];
  gutterWidth: number;
  reverse: boolean;
};

export const FlexColBase = createBaseComponent<
  FlexBoxProps | FlexColProps | PositionProps
>(
  {
    boxSizing: 'border-box',
    position: 'relative',
    flex: '0 0 auto',
  },
  [flexbox, position]
);
