import { StyledComponent } from 'styled-components';

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
