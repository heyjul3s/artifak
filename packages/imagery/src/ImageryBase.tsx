import { system } from 'styled-system';
import { createStyledComponent } from '@artifak/component-generator';
import { ImageryProps } from './typings';

const imageStylesConfig = system({
  objectFit: {
    property: 'objectFit'
  },
  objectPosition: {
    property: 'objectPosition'
  }
});

/* eslint-disable @typescript-eslint/no-explicit-any */
export const ImageryBase = createStyledComponent<Partial<ImageryProps>>(
  [imageStylesConfig],
  { display: 'block', width: '100%', height: 'auto' },
  'img'
);
