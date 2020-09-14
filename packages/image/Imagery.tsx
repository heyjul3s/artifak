import React from 'react';
import { ImageryBase } from './ImageryBase';
import { ImgComponent } from './typings';
import { getImageStyles } from './utils/styles';
import { ImgContext } from './context';

export function Imagery({ onImageLoad, onImageError }) {
  const {
    alt,
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    crossOrigin,
    decoding,
    fit,
    position,
    sizes,
    src,
    srcset,
    style,
  } = React.useContext<ImgComponent.Props>(ImgContext);

  const imageStyles = getImageStyles({ fit, position, style });

  return (
    <ImageryBase
      alt={alt}
      aria-label={ariaLabel || alt}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      crossOrigin={crossOrigin}
      decoding={decoding}
      onError={onImageError}
      onLoad={onImageLoad}
      src={src}
      srcSet={srcset}
      sizes={sizes}
      {...imageStyles}
    />
  );
}
