import { colors } from './colors';
import { container } from './container';
import { space, spacing } from './space';
import { fontFamily } from './fonts';
import { fontWeight } from 'artifak';
import { anchor } from './variants/anchor';

export const theme = {
  colors,
  container,
  fontFamily,
  fontWeight,
  space,
  spacing,
  variants: {
    ...anchor
  }
};
