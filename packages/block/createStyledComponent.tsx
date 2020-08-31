import styled, { CSSObject, StyledComponent } from 'styled-components';

import {
  compose,
  space,
  layout,
  display,
  typography,
  color,
  styleFn,
} from 'styled-system';

import { BlockBaseProps } from './typings';

export const createStyledComponent = <P,>(
  baseStyles: CSSObject = {},
  systemStyleProps: styleFn[] = []
): StyledComponent<'div', any, {} & P, never> =>
  styled('div')<P & BlockBaseProps>(
    baseStyles,
    compose(color, display, layout, space, typography, ...systemStyleProps)
  );
