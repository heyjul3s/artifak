import { flexbox } from 'styled-system';
import { createBaseStyledComponent } from '@artifak/component-generator';
import { FlexRowBaseProps } from './typings';

export const FlexRowBase = createBaseStyledComponent<FlexRowBaseProps>(
  [flexbox],
  {
    display: 'flex',
    flex: '0 1 auto',
    flexWrap: 'wrap'
  }
);
