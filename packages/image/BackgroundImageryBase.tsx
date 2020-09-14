import { StyledComponent } from 'styled-components';
import { createStyledComponent } from '@artifak/component-generator';
import { Base } from './typings';

export const BackgroundImageryBase: StyledComponent<
  'div',
  any,
  Base.BackgroundImagery,
  any
> = createStyledComponent<Base.BackgroundImagery>();
