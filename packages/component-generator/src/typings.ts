import { StyledComponent, CSSObject } from 'styled-components';
import { VariantArgs, styleFn } from 'styled-system';

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

/* eslint-disable @typescript-eslint/no-explicit-any */
export type StyledReactComponent = StyledComponent<
  keyof JSX.IntrinsicElements | React.ComponentType<any>,
  any,
  any,
  any
>;

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

export type CreateStyledComponent = {
  styles?: CSSObject;
  variants?: {
    variants: VariantArgs<Record<string, CSSObject>, string, string>;
  };
  styleProps?: styleFn[];
  element?: keyof JSX.IntrinsicElements;
};

export interface CreateBaseComponentsConfig {
  [key: string]: {
    as?: keyof JSX.IntrinsicElements;
  } & CSSObject;
}
