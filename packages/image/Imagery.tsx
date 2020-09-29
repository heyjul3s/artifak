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

  let onImageLoad = (target: HTMLImageElement) => {
    setImageState({
      ...imageState,
      imageWidth: target.width,
      imageHeight: target.height,
      isLoading: false,
      isLoaded: true,
      error: void 0,
    });
  };

  let onImageError = () => {
    setImageState({
      imageSource: fallbackSrc as string,
      imageWidth: 0,
      imageHeight: 0,
      isLoading: !imageState.error && !!props.fallbackSrc ? true : false,
      isLoaded: false,
      error: 'Failed to load image.',
    });

    onImageError = null as any;
  };

  const sizes = imgSizes(props.srcset, props.sizes);

  return (
    <ImageryBase
      alt={props.alt}
      aria-label={props.ariaLabel || props.alt}
      aria-labelledby={props.ariaLabelledBy}
      aria-describedby={props.ariaDescribedBy}
      crossOrigin={props.crossOrigin}
      decoding={props.decoding}
      onError={onImageError}
      onLoad={({ target }) => onImageLoad(target)}
      src={imageState.imageSource}
      srcSet={props.srcset}
      sizes={sizes}
    />
  );
}
