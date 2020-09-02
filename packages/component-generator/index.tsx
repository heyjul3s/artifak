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

import { StyledReactComponent, BaseComponentProps } from './typings';

export function createBaseComponents<ST, CP>(
  BaseComponent: AnyStyledComponent,
  styles: ST
): { [key in keyof ST]: React.FC<CP> } {
  return createComponents<ST, CP>(BaseComponent, styles);
}

export function createComponents<ST, SC>(
  SystemComponent: StyledReactComponent,
  styles: ST
): { [key in keyof ST]: React.FC<SC> } {
  return !!styles && Object.keys(styles).length >= 1
    ? (Object.entries(styles).reduce((acc, entry) => {
        const [key, styles] = entry;
        acc[key] = createComponent<SC, ST>(SystemComponent, styles);
        acc[key].displayName = key;

        return acc;
      }, {}) as { [key in keyof ST]: React.FC<SC> })
    : ({} as { [key in keyof ST]: React.FC<SC> });
}

export function createComponent<SC, ST>(
  StyledReactComponent: AnyStyledComponent,
  styles: ST
): React.FC<SC> {
  return (props) => (
    <StyledReactComponent {...styles} {...props}>
      {props.children}
    </StyledReactComponent>
  );
}

export const createStyledComponent = <CP extends {}>(
  systemStyleProps: styleFn[] = [],
  baseStyles: CSSObject = {},
  element: keyof JSX.IntrinsicElements = 'div'
) =>
  styled(element)<BaseComponentProps & CP>(
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

export type { BaseComponentProps } from './typings';