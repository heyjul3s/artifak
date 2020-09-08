export const getAllImageProps = props => ({
  ...getCommonProps(props),
  ...getImageProps(props),
});

export const getAllBackgroundImageProps = props => ({
  ...getCommonProps(props),
  ...getBackgroundImageProps(props),
});

export const getCommonProps = ({
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  className,
  fit,
  position,
  style,
}) => ({
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  className,
  fit,
  position,
  style,
});

export const getImageProps = ({
  alt,
  crossOrigin,
  decoding,
  srcset = '',
  sizes = '',
}) => {
  const imageSizes = !!srcset && !!sizes ? sizes : void 0;

  return {
    alt,
    crossOrigin,
    decoding,
    srcset,
    sizes: imageSizes,
  };
};

export const getBackgroundImageProps = ({ role }) => ({
  role,
});
