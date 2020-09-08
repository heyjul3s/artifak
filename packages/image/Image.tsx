import * as React from 'react';
import { CommonProps, ImageProps } from './types';
import { getImageStyles } from './lib/styles';

type Props = CommonProps & ImageProps;

export const Imej: React.FC<Props> = ({
  alt,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  className,
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
    <img
      className={className}
      src={src}
      alt={alt}
      crossOrigin={crossOrigin}
      decoding={decoding}
      srcSet={srcset}
      sizes={sizes}
      aria-label={ariaLabel || alt}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      style={imageStyles as React.CSSProperties}
    />
  );
};
