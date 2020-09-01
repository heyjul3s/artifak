import { createBaseComponents } from '@artifak/component-generator';
import { BlockBaseProps } from './typings';
import { BlockBase } from './BlockBase';

export function createBlockComponents<ST>(
  styles: ST
): { [key in keyof ST]: React.FC<BlockBaseProps> } {
  return createBaseComponents<ST, BlockBaseProps>(BlockBase, styles);
}
