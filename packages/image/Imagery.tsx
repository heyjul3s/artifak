import React from 'react';
import { ImgComponent } from './typings';
import { ImageryBase } from './ImageryBase';
import { imgSizes } from './utils/attributes';

export function Imagery(props: ImgComponent.Props) {
  const { fallbackSrc, src } = props;

  const [imageState, setImageState] = React.useState<ImgComponent.State>({
    imageSource: src,
    isImageLoaded: false,
    error: void 0,
  });

  React.useEffect(() => {
    setImageState({
      ...imageState,
      imageSource: src,
      error: void 0,
    });
  }, []);

  const sizes = imgSizes(props.srcset, props.sizes);

  let onImageLoad = async () => {
    await setImageState({
      ...imageState,
      isImageLoaded: true,
      error: void 0,
    });
  };

  let onImageError = async () => {
    await setImageState({
      ...imageState,
      imageSource: !imageState.error && !!fallbackSrc ? fallbackSrc : void 0,
      error: 'Failed to load image',
    });
  };

  return (
    <ImageryBase
      alt={props.alt}
      aria-label={props.ariaLabel || props.alt}
      aria-labelledby={props.ariaLabelledBy}
      aria-describedby={props.ariaDescribedBy}
      crossOrigin={props.crossOrigin}
      decoding={props.decoding}
      onError={onImageError}
      onLoad={onImageLoad}
      src={imageState.imageSource}
      srcSet={props.srcset}
      sizes={sizes}
    />
  );
}
