export type ImageProps = CommonProps &
  ImageElementProps &
  BackgroundImageProps &
  PlaceholderImage;

export type ImageState = {
  imageSource: string;
  imageWidth: number;
  imageHeight: number;
  isLoading: boolean;
  isLoaded: boolean;
  error?: string;
};

export type CommonProps = {
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  className?: string;
  fit?: string;
  position?: string;
};

export type PlaceholderImage = {
  PlaceholderImage?:
    | React.ElementType<PlaceholderImageProps>
    | React.ComponentClass
    | React.FunctionComponent;
};

export type ImageElementProps = {
  alt?: string;
  className?: string;
  crossOrigin?: CrossOriginType;
  delay?: number;
  decode?: boolean;
  decoding?: DecodingType;
  fallbackImage?: string;
  onload?: (imageState: PropsOnloadArg) => void;
  onerror?: (imageState: PropsOnloadArg) => void;
  sizes?: string;
  style?: React.CSSProperties;
  src: string;
  srcset?: string;
};

export type BackgroundImageProps = {
  alt?: string;
  children?: React.ReactNode;
  fallbackImage?: string;
  role?: string;
  style?: React.CSSProperties;
  src: string;
};

export type PlaceholderImageProps = ImageState;

export type CrossOriginType = 'anonymous' | 'use-credentials';

export type DecodingType = 'async' | 'sync' | 'auto';

export type PropsOnloadArg = {
  imageWidth: number;
  imageHeight: number;
} & ImageState;
