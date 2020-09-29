import React from 'react';
import { ImgComponent } from './typings';
import { ImageryBase } from './ImageryBase';
import { imgSizes } from './utils/attributes';

export function Imagery(props: ImgComponent.Props) {
  const { fallbackSrc, src } = props;

  const [imageState, setImageState] = React.useState<ImgComponent.State>({
    imageSource: src,
    imageWidth: 0,
    imageHeight: 0,
    isLoading: false,
    isLoaded: false,
    error: void 0,
  });

  React.useEffect(() => {
    setImageState({
      ...imageState,
      imageSource: src,
      isLoading: true,
      isLoaded: false,
      error: void 0,
    });
  }, []);

  const isImageLoading =
    !imageState.error && !!props.fallbackSrc ? true : false;

  const sizes = imgSizes(props.srcset, props.sizes);

  let onImageLoad = function({ target }) {
    return (function(target: HTMLImageElement) {
      setImageState({
        ...imageState,
        imageWidth: target.width,
        imageHeight: target.height,
        isLoading: false,
        isLoaded: true,
        error: void 0,
      });
    })(target);
  };

  let onImageError = async () => {
    await setImageState({
      imageSource: fallbackSrc as string,
      imageWidth: 0,
      imageHeight: 0,
      isLoading: isImageLoading,
      isLoaded: false,
      error: 'Failed to load image.',
    });

    onImageError = null as any;
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
