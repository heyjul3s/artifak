import { createComponents } from '@artifak/component-generator';
import { TypographyBaseProps } from './typings';
import { TypographyBase } from './TypographyBase';

export function createTypographyComponents<ST>(
  styles: ST
): { [key in keyof ST]: React.FC<TypographySystemProps> } {
  return createComponents<ST, TypographySystemProps>(TypographyBase, styles);
}
