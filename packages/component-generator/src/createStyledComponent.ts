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
  typography,
  variant,
  VariantArgs,
  styleFn
} from 'styled-system';

import { BaseComponentProps } from './typings';

export function createStyledComponent<CP>(
  baseStyles: CSSObject = {},
  variants: VariantArgs<object, string, string> = {},
  systemStyleProps: styleFn[] = [],
  element: keyof JSX.IntrinsicElements = 'div'
): AnyStyledComponent {
  return styled(element)<BaseComponentProps & CP>(
    baseStyles,
    variant(variants),
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
