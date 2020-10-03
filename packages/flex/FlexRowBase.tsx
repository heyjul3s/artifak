import { flexbox } from 'styled-system';
import { createStyledComponent } from '@artifak/component-generator';
import type { FlexRowBaseProps } from './typings';

export const FlexRowBase = createStyledComponent<FlexRowBaseProps>([flexbox], {
  display: 'flex',
  flex: '0 1 auto',
  flexWrap: 'wrap',
});
