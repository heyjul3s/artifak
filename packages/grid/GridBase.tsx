import { createBaseComponent } from '@artifak/block';
import {
  alignItems,
  AlignItemsProps,
  alignContent,
  AlignContentProps,
  justifyItems,
  JustifyItemsProps,
  justifyContent,
  JustifyContentProps,
  grid,
  GridProps,
} from 'styled-system';

export const GridBase = createBaseComponent<
  | AlignItemsProps
  | AlignContentProps
  | JustifyItemsProps
  | JustifyContentProps
  | GridProps
>({}, [alignItems, alignContent, justifyItems, justifyContent, grid]);
