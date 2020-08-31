import styled from 'styled-components';

import {
  compose,
  space,
  layout,
  display,
  typography,
  color,
  styleFn,
} from 'styled-system';

import { CSSObject, StyledComponent } from 'styled-components';

import { BlockBaseProps } from './typings';

export const createBaseComponent = <P,>(
  baseStyles: CSSObject = {},
  systemStyleProps: styleFn[] = []
): StyledComponent<'div', any, {} & P, never> =>
  styled('div')<P & BlockBaseProps>(
    baseStyles,
    compose(color, display, layout, space, typography, ...systemStyleProps)
  );
