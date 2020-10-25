import { StyledComponent } from 'styled-components';
import { system } from 'styled-system';
import { createStyledComponent } from '@artifak/component-generator';
import { ImgComponent } from './typings';

const imageStylesConfig = system({
  objectFit: {
    property: 'objectFit'
  },
  objectPosition: {
    property: 'objectPosition'
  }
});

export const ImageryBase: StyledComponent<
  'img',
  any,
  ImgComponent.Props,
  any
> = createStyledComponent<Partial<ImgComponent.Props>>(
  [imageStylesConfig],
  { display: 'block', width: '100%', height: 'auto' },
  'img'
);
