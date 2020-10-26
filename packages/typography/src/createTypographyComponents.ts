import { createBaseComponents } from '@artifak/component-generator';
import { TypographyBaseProps } from './typings';
import { TypographyBase } from './TypographyBase';

export function createTypographyComponents<ST>(
  styles: ST
): { [key in keyof unknown]: React.FC<TypographyBaseProps> } {
  return createBaseComponents<ST, TypographyBaseProps>(TypographyBase, styles);
}
