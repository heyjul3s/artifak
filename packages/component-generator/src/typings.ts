import { AllHTMLAttributes } from 'react';
import * as CSS from 'csstype';
import { ThemedStyledFunction, ThemedStyledProps } from 'styled-components';
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

export type BaseProps<ThemeType> = BaseComponentProps & Variant<ThemeType>;

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

export type Variant<ThemeType = void> = {
  variant?: ResponsiveValue<string | number, ThemeType>;
};

export type Attrs<Props, Attributes extends Partial<Props>, ThemeType> =
  | ((props: ThemedStyledProps<Props, ThemeType>) => Attributes)
  | Attributes;

/* eslint-disable @typescript-eslint/no-explicit-any */
export type BaseConfig<Props = void, Attributes = void, ThemeType = void> = {
  styles?: ScalableCSS;
  attrs?: Attributes;
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
export type ScalableCSS = CSSObjectWithScale & CSSPseudos;

export type ComponentsRecord<Dict, Props, ThemeType> = {
  [key in keyof Dict | 'Base']: React.FC<Props & BaseProps<ThemeType>>;
};

export type Settings<Element = HTMLDivElement> = {
  [key: string]: ScalableCSS & {
    as?: string;
    attrs?: AllHTMLAttributes<Element>;
  };
};
