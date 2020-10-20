import { system } from 'styled-system';
import { createStyledComponent } from '@artifak/component-generator';

const typographyStylesConfig = system({
  textDecoration: {
    property: 'textDecoration',
  },
  textIndent: {
    property: 'textIndent',
  },
  textTransform: {
    property: 'textTransform',
  },
  textOverflow: {
    property: 'textOverflow',
  },
  whiteSpace: {
    property: 'whiteSpace',
  },
  wordBreak: {
    property: 'wordBreak',
  },
  wordSpacing: {
    property: 'wordSpacing',
  },
});

export const TypographyBase = createStyledComponent([typographyStylesConfig]);
