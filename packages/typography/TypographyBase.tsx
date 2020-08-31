import { borderRadius, BorderRadiusProps } from 'styled-system';
import { createStyledComponent } from '@artifak/block';

export const TypographyBase = createStyledComponent<BorderRadiusProps>({}, [
  borderRadius,
]);
