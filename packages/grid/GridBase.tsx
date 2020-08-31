import { createStyledComponent } from '@artifak/block';
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

export const GridBase = createStyledComponent<
  | AlignItemsProps
  | AlignContentProps
  | JustifyItemsProps
  | JustifyContentProps
  | GridProps
>({}, [alignItems, alignContent, justifyItems, justifyContent, grid]);
