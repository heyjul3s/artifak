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

export const mockComponentStyles = {
  H1: {
    marginBottom: [15],
    as: 'h1',
  },

  H2: {
    marginTop: 0,
    as: 'h2',
  },
};

export const MockComponent = styled('div')(
  compose(space, layout, display, typography, color, flexbox)
);
