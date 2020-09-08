import React from 'react';

export const getImageStyles = ({
  fit = 'contain',
  position = '50% 50%',
  style = {},
}) => {
  const { objectFit, objectPosition, ...styles }: React.CSSProperties = style;

  return {
    objectFit: fit,
    objectPosition: position,
    ...styles,
  };
};

export const getBackgroundImageStyles = ({
  fit = 'contain',
  position = '50% 50%',
  style = {},
  src = '',
}) => ({
  display: 'block',
  backgroundImage: `url("${src}")`,
  backgroundPosition: position,
  backgroundRepeat: 'no-repeat',
  backgroundSize: fit.replace('fill', '100% 100%').replace('none', 'auto'),
  ...style,
});
