import { flexbox, FlexboxProps } from 'styled-system';
import { createStyledComponent } from '@artifak/block';

type FlexRowProps = {
  reverse?: boolean;
};

export const FlexRowBase = createStyledComponent<FlexboxProps | FlexRowProps>(
  {
    display: 'flex',
    flex: '0 1 auto',
    flexWrap: 'wrap',
  },
  [flexbox]
);
