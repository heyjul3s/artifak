import { createComponents } from '@artifak/component-generator';
import { BlockBaseProps } from './typings';
import { BlockBase } from './BlockBase';

export function createBaseComponents<ST>(
  styles: ST
): { [key in keyof ST]: React.FC<BlockBaseProps> } {
  return createComponents<ST, BlockBaseProps>(BlockBase, styles);
}
