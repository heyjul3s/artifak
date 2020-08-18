import styled from 'styled-components';
import isPlainObject from 'lodash.isplainobject';

import { createComponents } from '@artifak/component-generator';

import {
  compose,
  space,
  layout,
  display,
  typography,
  color,
  flexbox,
} from 'styled-system';

export const Block = styled('div')(
  compose(space, layout, display, typography, color, flexbox)
);

export function createBlockComponents<TS, TC>(systemComponentStyles) {
  if (
    isPlainObject(systemComponentStyles) &&
    Object.keys(systemComponentStyles).length
  ) {
    return createComponents<TS, TC>(Block, systemComponentStyles);
  } else {
    return Block;
  }
}
