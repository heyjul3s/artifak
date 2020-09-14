import React from 'react';
import { ImgComponent } from './typings';
import { Imagery } from './Imagery';
import { BackgroundImagery } from './BackgroundImagery';
import { ImgContext } from './context';
import { imgSizes } from './utils/styles';

export function Img(props: ImgComponent.Props) {
  const { children, delay = 0, fallbackSrc, Placeholder, src } = props;

  const [imageState, setImageState] = React.useState<ImgComponent.State>({
    imageSource: src,
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

  let onImageLoad: () => void = async () => {
    await setTimeout(() => {
      setImageState({
        ...imageState,
        isLoading: false,
        isLoaded: true,
        error: void 0,
      });
    }, delay);
  };

  let onImageError: () => Promise<void> | null = async () => {
    await setImageState({
      imageSource: fallbackSrc as string,
      isLoading: !imageState.error && !!props.fallbackSrc ? true : false,
      isLoaded: false,
      error: 'Failed to load image.',
    });

    onImageError = null as any;
  };

  return (
    <ImgContext.Provider
      value={{
        ...props,
        src: imageState.imageSource,
        sizes: imgSizes(props.srcset, props.sizes),
      }}
    >
      {!!Placeholder && (!imageState.isLoaded || imageState.error) && (
        <Placeholder {...imageState} />
      )}

      {!children && !imageState.error && (
        <Imagery onImageLoad={onImageLoad} onImageError={onImageError} />
      )}

      {!!children && <BackgroundImagery />}
    </ImgContext.Provider>
  );
}
