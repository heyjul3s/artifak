import * as React from 'react';
import { Base } from './typings';
import { getBackgroundImageStyles } from './utils/styles';
import { BackgroundImageryBase } from './BackgroundImageryBase';
import { ImgContext } from './context';

export function BackgroundImagery() {
  const {
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    children,
    fit,
    position,
    role,
    src,
    style,
  } = React.useContext<Base.BackgroundImagery>(ImgContext);

  const backgroundImageStyles = getBackgroundImageStyles({
    fit,
    position,
    style,
    src,
  });

  return (
    <BackgroundImageryBase
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-labelledby={ariaLabelledBy}
      role={role}
      {...backgroundImageStyles}
    >
      {children}
    </BackgroundImageryBase>
  );
}
