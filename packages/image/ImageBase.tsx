import { StyledComponent } from 'styled-components';
import { system } from 'styled-system';
import { createStyledComponent } from '@artifak/component-generator';
import { ImageProps } from './typings';

const imageStylesConfig = system({
  objectFit: {
    property: 'objectFit',
  },
  objectPosition: {
    property: 'objectPosition',
  },
});

export const ImageBase: StyledComponent<
  'img',
  any,
  ImageProps,
  any
> = createStyledComponent<Partial<ImageProps>>(
  [imageStylesConfig],
  { display: 'block', width: '100%', height: 'auto' },
  'img'
);
