import { flexbox } from 'styled-system';
import { createStyledComponent } from '@artifak/component-generator';
import { FlexRowBaseProps } from './typings';

export const FlexRowBase = createStyledComponent<FlexRowBaseProps>({
  styles: {
    display: 'flex',
    flex: '0 1 auto',
    flexWrap: 'wrap'
  },
  styleProps: [flexbox]
});
