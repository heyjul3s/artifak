import * as React from 'react';
import { ImageBase } from './ImageBase';
import { CommonProps, ImageProps } from './typings';
import { getImageStyles } from './lib/styles';

type Props = CommonProps & ImageProps;

export const Imej: React.FC<Props> = ({
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
}) => {
  const imageStyles = getImageStyles({ fit, position, style });

  return (
    <ImageBase
      src={src}
      alt={alt}
      crossOrigin={crossOrigin}
      decoding={decoding}
      srcSet={srcset}
      sizes={sizes}
      aria-label={ariaLabel || alt}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      {...imageStyles}
    />
  );
};
