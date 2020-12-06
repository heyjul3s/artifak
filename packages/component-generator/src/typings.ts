import * as CSS from 'csstype';

import {
  CSSObject,
  ThemedStyledFunction,
  ThemedStyledProps,
  InterpolationFunction
} from 'styled-components';

import { styleFn, Scale } from 'styled-system';

import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  DisplayProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  ResponsiveValue
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

export type ComponentVariant<ThemeType = void> = {
  variant?: ResponsiveValue<string | number, ThemeType>;
};

export type Attrs<Props, Attributes extends Partial<Props>, ThemeType> =
  | ((props: ThemedStyledProps<Props, ThemeType>) => Attributes)
  | Attributes;

/* eslint-disable @typescript-eslint/no-explicit-any */
export type StyledComponentConfig<
  Props = void,
  Attributes = void,
  ThemeType = void
> = {
  styles?: CSSObject | TemplateStringsArray | InterpolationFunction<any>;
  attrs?: Attrs<Props, Attributes, ThemeType>;
  variants?: {
    [key: string]: StyledSystemCSSObject;
  };
  styleProps?: styleFn[];
  element?: keyof JSX.IntrinsicElements;
  component?: ThemedStyledFunction<
    keyof JSX.IntrinsicElements | React.ComponentType<Props>,
    ThemeType | any,
    React.ComponentType<Props>,
    keyof any
  >;
};

export type CSSObjectWithScale = CSS.Properties<string | number | Scale>;
export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObjectWithScale };
export type StyledSystemCSSObject = CSSObjectWithScale & CSSPseudos;

export type Settings<Attributes = void> = {
  styles: StyledSystemCSSObject;
  attrs?: Attributes;
};
