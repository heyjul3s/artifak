import { StyledComponent } from 'styled-components';
import { createStyledComponent } from '@artifak/component-generator';
import { ImageProps } from './typings';

export const BackgroundImageBase: StyledComponent<
  'div',
  any,
  ImageProps,
  any
> = createStyledComponent<Partial<ImageProps>>();
