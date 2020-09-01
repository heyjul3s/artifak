import { borderRadius, BorderRadiusProps } from 'styled-system';
import { createStyledComponent } from '@artifak/component-generator';

export const TypographyBase = createStyledComponent<BorderRadiusProps>([
  borderRadius,
]);
