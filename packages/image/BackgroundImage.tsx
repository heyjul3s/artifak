import * as React from 'react';
import { CommonProps, BackgroundImageProps } from './types';
import { getBackgroundImageStyles } from './lib/styles';

type Props = CommonProps & BackgroundImageProps;

export const BackgroundImage: React.FC<Props> = ({
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  className,
  children,
  fit,
  position,
  role,
  src,
  style,
}) => {
  const backgroundImageStyles = getBackgroundImageStyles({
    fit,
    position,
    style,
    src,
  });

  return (
    <div
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-labelledby={ariaLabelledBy}
      className={className}
      role={role}
      style={backgroundImageStyles}
    >
      {children}
    </div>
  );
};
