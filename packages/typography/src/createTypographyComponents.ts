import { createBaseComponents } from '@artifak/component-generator';
import { TypographyBaseProps } from './typings';
import { TypographyBase } from './TypographyBase';

export function createTypographyComponents<S>(
  styles: S
): { [key in keyof S]: React.FC<TypographyBaseProps> } {
  return createBaseComponents<S, TypographyBaseProps>(TypographyBase, styles);
}
