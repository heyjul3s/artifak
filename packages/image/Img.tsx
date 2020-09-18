import React from 'react';
import { ImgComponent } from './typings';
import { Imagery } from './Imagery';
import { BackgroundImagery } from './BackgroundImagery';
import { ImgContext } from './context';
import { imgSizes } from './utils/styles';
import { supportsObjectFit } from './utils/support';

export function Img(props: ImgComponent.Props) {
  const { children, fallbackSrc, src } = props;

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

  let onImageLoad = () => {
    setImageState({
      ...imageState,
      isLoading: false,
      isLoaded: true,
      error: void 0,
    });
  };

  let onImageError = () => {
    setImageState({
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
      {!children && (
        <Imagery onImageLoad={onImageLoad} onImageError={onImageError} />
      )}

      {!!children ||
        (props.fit === 'cover' && !supportsObjectFit && <BackgroundImagery />)}
    </ImgContext.Provider>
  );
}
