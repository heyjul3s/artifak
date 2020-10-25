import { BaseComponentProps } from '@artifak/component-generator';

export type ImageryProps = {
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  alt?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
  decoding?: 'async' | 'sync' | 'auto';
  onLoad?: () => void;
  onError?: () => void;
  sizes?: string;
  src: string;
  srcset?: string;
  style?: React.CSSProperties;
} & BaseComponentProps;
