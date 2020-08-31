import { createComponents } from '@artifak/component-generator';
import { BlockBaseProps } from './typings';
import { BlockBase } from './Block';

// TODO: generic prop to intersect with BlockBaseProps?;
export function createBlockComponents<ST>(
  styles: ST
): { [key in keyof ST]: React.FC<BlockBaseProps> } {
  return createComponents<ST, BlockBaseProps>(BlockBase, styles);
}
