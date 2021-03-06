import { flexbox } from 'styled-system';
import { createStyledComponent } from '@artifak/component-generator';
import { FlexColBaseProps } from './typings';

export const FlexColBase = createStyledComponent<FlexColBaseProps>({
  styles: {
    boxSizing: 'border-box',
    position: 'relative'
  },
  styleProps: [flexbox]
});
