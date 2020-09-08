import * as React from 'react';
import { ImageProps, ImageState } from './typings';
import { supportsObjectFit } from './lib/support';
import { Imej } from './Image';
import { BackgroundImage } from './BackgroundImage';
import { getAllImageProps, getAllBackgroundImageProps } from './lib/props';

export function Img(props: ImageProps) {
  const image: HTMLImageElement = new Image();

  const {
    children,
    decode,
    delay = 0,
    fallbackImage,
    Placeholder,
    src,
  } = props;

  const [imageState, setImageState] = React.useState<ImageState>({
    imageWidth: 0,
    imageHeight: 0,
    imageSource: src,
    isLoading: false,
    isLoaded: false,
    error: void 0,
  });

  const isLoadImage = !!src && !imageState.error && imageState.isLoaded;

  React.useEffect(() => {
    setImageState({
      ...imageState,
      imageSource: src,
      isLoading: true,
      isLoaded: false,
      error: void 0,
    });

    prepareImage();
  }, []);

  React.useEffect(() => {
    if (!!imageState.error && imageState.isLoading) {
      prepareImage();
    }

    if (!imageState.error && imageState.isLoaded && !!props.onload) {
      props.onload({
        ...imageState,
      });
    }

    if (!!imageState.error && !imageState.isLoading && props.onerror) {
      props.onerror({
        ...imageState,
      });
    }
  }, [imageState]);

  const prepareImage = () => {
    image.src = imageState.imageSource;
    attachEventsToImage();
  };

  const attachEventsToImage = () => {
    if (decode && !!image.decode) {
      image.decode().then(onImageLoad, onImageError);
    } else {
      image.onload = onImageLoad;
      image.onerror = onImageError;
    }
  };

  let onImageLoad = () => {
    setTimeout(() => {
      setImageState({
        ...imageState,
        imageWidth: image.width,
        imageHeight: image.height,
        isLoading: false,
        isLoaded: true,
        error: void 0,
      });
    }, delay);
  };

  let onImageError = () => {
    setImageState({
      imageWidth: image.width,
      imageHeight: image.height,
      imageSource: fallbackImage as string,
      isLoading: !imageState.error && !!props.fallbackImage ? true : false,
      isLoaded: false,
      error: 'Failed to load image.',
    });

    onImageError = null as any;
  };

  if (!imageState.isLoaded && !imageState.isLoading && !!imageState.error) {
    return null;
  }

  return (
    <React.Fragment>
      {!!Placeholder && <Placeholder {...imageState} />}

      {isLoadImage && !children && supportsObjectFit && (
        <Imej {...getAllImageProps(props)} src={imageState.imageSource} />
      )}

      {isLoadImage && children && (
        <BackgroundImage
          {...getAllBackgroundImageProps(props)}
          src={imageState.imageSource}
        />
      )}
    </React.Fragment>
  );
}
