import styled, { CSSObject } from 'styled-components';

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
  styleFn
} from 'styled-system';

import { BaseComponentProps } from './typings';

export function createStyledComponent<CP extends Record<string, unknown>>(
  systemStyleProps: styleFn[] = [],
  baseStyles: CSSObject = {},
  element: keyof JSX.IntrinsicElements = 'div'
): styleFn {
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
