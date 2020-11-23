import styled, { AnyStyledComponent } from 'styled-components';

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
  variant
} from 'styled-system';

import { BaseComponentProps, CreateStyledComponent } from './typings';

export function createStyledComponent<P = void>(
  config: CreateStyledComponent
): AnyStyledComponent {
  const {
    styles = {},
    variants = {},
    styleProps = [],
    element = 'div'
  } = config;

  return styled(element)<BaseComponentProps & P>(
    styles,
    variant({ variants }),
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
      ...styleProps
    )
  );
}
