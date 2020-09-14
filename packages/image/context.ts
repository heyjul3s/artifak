import React from 'react';
import { ImgComponent } from './typings';

export const ImgContext = React.createContext<ImgComponent.Props>({
  alt: '',
  ariaLabel: '',
  ariaLabelledBy: '',
  ariaDescribedBy: '',
  crossOrigin: void 0,
  decode: false,
  decoding: 'auto',
  delay: 0,
  fallbackSrc: '',
  fit: 'contain',
  onload: void 0,
  onerror: void 0,
  Placeholder: void 0,
  position: 'center',
  role: '',
  sizes: '',
  src: '',
  srcset: '',
  style: {},
});
