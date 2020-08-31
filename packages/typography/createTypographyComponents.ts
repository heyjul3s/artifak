import { borderRadius, BorderRadiusProps } from 'styled-system';
import { createComponents } from '@artifak/component-generator';
import { TypographySystemProps } from './typings';
import { createStyledComponent } from '@artifak/block';

export const TypographyBase = createStyledComponent<BorderRadiusProps>({}, [
  borderRadius,
]);

export function createTypographyComponents<ST>(
  styles: ST
): { [key in keyof ST]: React.FC<TypographySystemProps> } {
  return createComponents<ST, TypographySystemProps>(TypographyBase, styles);
}
