import type { BaseComponentProps } from '@artifak/component-generator';

export namespace ImgComponent {
  export type Props = BaseComponentProps & Imagery.Props;
}

export namespace Imagery {
  export type Props = Attributes & Accessibility;

  export type Accessibility = {
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
  };

  export type Attributes = {
    alt?: string;
    crossOrigin?: 'anonymous' | 'use-credentials';
    decoding?: 'async' | 'sync' | 'auto';
    onLoad?: () => void;
    onError?: () => void;
    sizes?: string;
    src: string;
    srcset?: string;
    style?: React.CSSProperties;
  };
}
