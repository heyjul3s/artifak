import React from 'react';
import styled from 'styled-components';

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
  typography,
} from 'styled-system';

import type { styleFn } from 'styled-system';
import type { CSSObject, AnyStyledComponent } from 'styled-components';
import type { BaseComponentProps } from './typings';

export function createBaseComponents<ST, CP extends {}>(
  BaseComponent: AnyStyledComponent,
  styles: ST
): { [key in keyof any]: React.FC<CP>; } {
  let acc: { [key in keyof any]: React.FC<CP> } = {};

  return !!styles && Object.keys(styles).length >= 1
    ? Object.entries(styles).reduce((acc, entry) => {
      const [prop, style] = entry;

      if (hasKey(styles, prop)) {
        acc[prop] = createStyledFunctionComponent<ST, CP>(BaseComponent, style);
        acc[prop].displayName = prop;
      }

      return acc;
    }, acc)
    : acc;
}

export function createStyledFunctionComponent<ST, CP>(
  StyledReactComponent: AnyStyledComponent,
  styles: ST
): React.FC<CP> {
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
  return key in obj;
}
