import { StyledComponent } from 'styled-components';
import {
  SpaceProps,
  LayoutProps,
  DisplayProps,
  TypographyProps,
  ColorProps,
} from 'styled-system';

export type StyledReactComponent = StyledComponent<
  keyof JSX.IntrinsicElements | React.ComponentType<any>,
  any,
  any,
  any
>;

export type BaseComponentProps =
  | ColorProps
  | DisplayProps
  | LayoutProps
  | SpaceProps
  | TypographyProps;
