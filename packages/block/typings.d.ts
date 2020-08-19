import {
  BorderRadiusProps,
  ColorProps,
  TextProps,
  SpaceProps,
  FlexProps,
  LayoutProps,
} from 'styled-system';

export type BlockSystem =
  | FlexProps
  | LayoutProps
  | BorderRadiusProps
  | ColorProps
  | TextProps
  | SpaceProps;
