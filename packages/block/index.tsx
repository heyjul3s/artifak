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
import { BlockSystem } from './typings';

export const Block = styled('div')(
  compose(space, layout, display, typography, color, flexbox)
);

export function createBlockComponents<ST>(systemComponentStyles: ST) {
  if (
    isPlainObject(systemComponentStyles) &&
    Object.keys(systemComponentStyles).length
  ) {
    return createComponents<ST, { [key in keyof ST]: React.FC<BlockSystem> }>(
      Block,
      systemComponentStyles
    );
  } else {
    return Block;
  }
}
