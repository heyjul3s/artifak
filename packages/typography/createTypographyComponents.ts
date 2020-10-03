import { createBaseComponents } from '@artifak/component-generator';
import type { TypographyBaseProps } from './typings';
import { TypographyBase } from './TypographyBase';

export function createTypographyComponents<ST>(
  styles: ST
): { [key in keyof any]: React.FC<TypographyBaseProps> } {
  return createBaseComponents<ST, TypographyBaseProps>(TypographyBase, styles);
}
