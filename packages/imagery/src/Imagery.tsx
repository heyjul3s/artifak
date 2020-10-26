import React from 'react';
import { ImageryBase } from './ImageryBase';
import { imgSizes } from './utils/attributes';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Imagery = React.forwardRef((props: any, ref) => {
  const sizes = imgSizes(props.srcset, props.sizes);

  return <ImageryBase sizes={sizes} {...props} ref={ref} />;
});
