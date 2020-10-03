import React from 'react';
import { ImgComponent } from './typings';
import { ImageryBase } from './ImageryBase';
import { imgSizes } from './utils/attributes';

export function Imagery(props: ImgComponent.Props) {
  const sizes = imgSizes(props.srcset, props.sizes);

  return (
    <ImageryBase
      alt={props.alt}
      aria-label={props.ariaLabel || props.alt}
      aria-labelledby={props.ariaLabelledBy}
      aria-describedby={props.ariaDescribedBy}
      crossOrigin={props.crossOrigin}
      decoding={props.decoding}
      src={props.src}
      srcSet={props.srcset}
      sizes={sizes}
    />
  );
}
