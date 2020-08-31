import styled from 'styled-components';

import {
  compose,
  space,
  layout,
  display,
  typography,
  color,
  flexbox,
  position,
} from 'styled-system';

import { FlexBaseProps } from './typings';

export const createFlexBase = <P extends FlexBaseProps>(baseStyles = {}) =>
  styled('div')<P>(
    baseStyles,
    compose(space, layout, display, typography, color, flexbox, position)
  );
