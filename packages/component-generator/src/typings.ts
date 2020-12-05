import {
  CSSObject,
  ThemedStyledFunction,
  ThemedStyledProps,
  InterpolationFunction
} from 'styled-components';
import { styleFn, ObjectOrArray } from 'styled-system';

import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  DisplayProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps
} from 'styled-system';

export type BaseComponentProps =
  | BackgroundProps
  | BorderProps
  | ColorProps
  | DisplayProps
  | LayoutProps
  | PositionProps
  | ShadowProps
  | SpaceProps
  | TypographyProps;

export type ComponentVariant = { variant?: string };

export type StyleValue =
  | string
  | number
  | ObjectOrArray<number | string | symbol>;

export type Attrs<P, A extends Partial<P>, T> =
  | ((props: ThemedStyledProps<P, T>) => A)
  | A;

export type StyledComponentConfig<P = void, A = void, T = void> = {
  styles?: CSSObject | TemplateStringsArray | InterpolationFunction<any>;
  attrs?: Attrs<P, A, T>;
  variants?: {
    [key: string]: Partial<
      {
        [key in keyof CSSObject]: StyleValue;
      }
    >;
  };
  styleProps?: styleFn[];
  element?: keyof JSX.IntrinsicElements;
};

export type StyledComponentConfigWithBase<
  P = void,
  A = void,
  T = void
> = StyledComponentConfig<P, A, T> & {
  component: ThemedStyledFunction<any, any, any, any>;
};

export interface CreateBaseComponentsConfig {
  [key: string]: {
    as?: keyof JSX.IntrinsicElements;
  } & CSSObject;
}

export type StyledSystemCSSObject = {
  [key in keyof any]: string | string[] | number | number[];
};

export type Settings<A = void> = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  styles: StyledSystemCSSObject;
  attrs?: A;
};
