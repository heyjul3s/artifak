import { flexbox } from 'styled-system';
import { createBaseStyledComponent } from '@artifak/component-generator';
import { FlexColBaseProps } from './typings';

export const FlexColBase = createBaseStyledComponent<FlexColBaseProps>(
  [flexbox],
  {
    boxSizing: 'border-box',
    position: 'relative',
    flex: '0 0 auto'
  }
);
