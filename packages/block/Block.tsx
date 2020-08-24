import styled from 'styled-components';

import {
  compose,
  space,
  layout,
  display,
  typography,
  color,
  flexbox,
} from 'styled-system';

export const BlockBase = styled('div')(
  compose(space, layout, display, typography, color, flexbox)
);
