import {
  BorderRadiusProps,
  ColorProps,
  TypographyProps,
  SpaceProps,
  LayoutProps,
} from 'styled-system';

import { StyledComponent } from 'styled-components';

export type BlockBaseProps =
  | LayoutProps
  | BorderRadiusProps
  | ColorProps
  | TypographyProps
  | SpaceProps;

export type StyledReactComponent = StyledComponent<
  keyof JSX.IntrinsicElements | React.ComponentType<any>,
  any,
  any,
  any
>;
