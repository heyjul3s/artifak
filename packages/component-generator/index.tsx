import * as React from 'react';
import styled, { CSSObject, AnyStyledComponent } from 'styled-components';

import {
  compose,
  background,
  border,
  color,
  display,
  layout,
  position,
  shadow,
  space,
  styleFn,
  typography,
} from 'styled-system';

import type { StyledComponent } from 'styled-components';

import type {
  BackgroundProps,
  BorderProps,
  ColorProps,
  DisplayProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
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

export function createBaseComponents<ST, CP>(
  BaseComponent: AnyStyledComponent,
  styles: ST
): { [key in keyof any]: React.FC<CP> } {
  return createComponentsDictionary<ST, CP>(BaseComponent, styles);
}

export function createComponentsDictionary<ST, SC>(
  SystemComponent: StyledReactComponent,
  styles: ST
) {
  return !!styles && Object.keys(styles).length >= 1
    ? Object.entries(styles).reduce((acc, entry) => {
      const [prop, style] = entry;

      if (hasKey(styles, prop)) {
        acc[prop] = createStyledFunctionComponent<SC, ST>(SystemComponent, style);
        acc[prop].displayName = prop;
      }

      return acc;
    }, {} as { [key in keyof any]: React.FC<SC> })
    : {} as { [key in keyof any]: React.FC<SC> };
}

export function createStyledFunctionComponent<SC, ST>(
  StyledReactComponent: AnyStyledComponent,
  styles: ST
): React.FC<SC> {
  return (props) => (
    <StyledReactComponent {...styles} {...props}>
      {props.children}
    </StyledReactComponent>
  );
}

export function createStyledComponent<CP extends {}>(
  systemStyleProps: styleFn[] = [],
  baseStyles: CSSObject = {},
  element: keyof JSX.IntrinsicElements = 'div'
) {
  return styled(element)<BaseComponentProps & CP>(
    baseStyles,
    compose(
      background,
      border,
      color,
      display,
      layout,
      position,
      shadow,
      space,
      typography,
      ...systemStyleProps
    )
  );
}

function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj
}