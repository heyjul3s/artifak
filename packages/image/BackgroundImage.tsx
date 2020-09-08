import * as React from 'react';
import { CommonProps, BackgroundImageProps } from './typings';
import { getBackgroundImageStyles } from './lib/styles';
import { BackgroundImageBase } from './BackgroundImageBase';

type Props = CommonProps & BackgroundImageProps;

export const BackgroundImage: React.FC<Props> = ({
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
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
    <BackgroundImageBase
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-labelledby={ariaLabelledBy}
      role={role}
      {...backgroundImageStyles}
    >
      {children}
    </BackgroundImageBase>
  );
};
