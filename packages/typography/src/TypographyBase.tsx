import { system } from 'styled-system';
import { createStyledComponent } from '@artifak/component-generator';

const typographyStylesConfig = system({
  textDecoration: true,
  textIndent: true,
  textTransform: true,
  textOverflow: true,
  whiteSpace: true,
  wordBreak: true,
  wordSpacing: true
});

export const TypographyBase = createStyledComponent<
  typeof typographyStylesConfig
>([typographyStylesConfig]);
