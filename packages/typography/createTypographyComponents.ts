import isPlainObject from 'lodash.isplainobject';
import styled from 'styled-components';
import { borderRadius, compose, color, space, typography } from 'styled-system';
import { createComponents } from '@artifak/component-generator';
import { TypographySystem } from './typings';

export const TypographyBase = styled('div')(
  compose(borderRadius, color, space, typography)
);

export function createTypographyComponents<ST>(styles: ST) {
  if (isPlainObject(styles) && Object.keys(styles).length) {
    return createComponents<
      ST,
      { [key in keyof ST]: React.FC<TypographySystem> }
    >(TypographyBase, styles);
  } else {
    return TypographyBase;
  }
}
