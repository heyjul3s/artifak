import React from 'react';
import { isNonEmptyString } from './string';

export const getImageStyles = ({
  fit = 'contain',
  position = '50% 50%',
  style = {},
} = {}) => {
  const { objectFit, objectPosition, ...styles }: React.CSSProperties = style;

  return {
    objectFit: fit,
    objectPosition: position,
    ...styles,
  };
};

export const getBackgroundImageStyles = (props) => {
  return {
    backgroundImage: `url("${props.src}")`,
    backgroundPosition: props.position,
    backgroundRepeat: 'no-repeat',
    backgroundSize: props.fit
      ?.replace('fill', '100% 100%')
      .replace('none', 'auto'),
    ...props.style,
  };
};

export function imgSizes(srcset?: string, sizes?: string): string | undefined {
  return isNonEmptyString(srcset) && isNonEmptyString(sizes) ? sizes : void 0;
}
