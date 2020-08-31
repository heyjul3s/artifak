import { createComponents } from '@artifak/component-generator';
import { TypographyBaseProps } from './typings';
import { TypographyBase } from './TypographyBase';

export function createTypographyComponents<ST>(
  styles: ST
): { [key in keyof ST]: React.FC<TypographyBaseProps> } {
  return createComponents<ST, TypographyBaseProps>(TypographyBase, styles);
}
