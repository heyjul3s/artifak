import { BaseComponentProps } from '@artifak/component-generator';

export namespace ImgComponent {
  export type Props = {
    onload?: () => void;
    onerror?: () => void;
  } & BaseComponentProps &
    Base.CommonProps &
    Base.Imagery;

  export type State = {
    imageSource: string;
    imageWidth: number;
    imageHeight: number;
    isLoading: boolean;
    isLoaded: boolean;
    error?: string;
  };
}

export namespace Base {
  export type CommonProps = {
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    fit?: string;
    position?: string;
    style?: React.CSSProperties;
  };

  export type Imagery = ImageryProps & CommonProps;

  export type ImageryProps = {
    alt?: string;
    crossOrigin?: ImgAttributes.CrossOriginType;
    decoding?: ImgAttributes.DecodingType;
    fallbackSrc?: string;
    onload?: (imageState: ImgEvents.OnLoad) => void;
    onerror?: (imageState: ImgEvents.OnError) => void;
    sizes?: string;
    src: string;
    srcset?: string;
  };
}

export namespace ImgEvents {
  export type OnLoad = {
    imageWidth: number;
    imageHeight: number;
  } & ImgComponent.State;

  export type OnError = {
    imageWidth: number;
    imageHeight: number;
  } & ImgComponent.State;
}

export namespace ImgAttributes {
  export type CrossOriginType = 'anonymous' | 'use-credentials';
  export type DecodingType = 'async' | 'sync' | 'auto';
}
