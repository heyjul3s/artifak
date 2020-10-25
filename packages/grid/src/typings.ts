import {
  AlignItemsProps,
  AlignContentProps,
  AlignSelfProps,
  JustifyItemsProps,
  JustifyContentProps,
  GridProps,
  GridAreaProps,
  GridColumnProps,
  GridRowProps,
  JustifySelfProps
} from 'styled-system';

export type GridBaseProps =
  | AlignItemsProps
  | AlignContentProps
  | JustifyItemsProps
  | JustifyContentProps
  | GridProps;

export type GridItemBaseProps =
  | AlignSelfProps
  | GridAreaProps
  | GridColumnProps
  | GridRowProps
  | JustifySelfProps;
