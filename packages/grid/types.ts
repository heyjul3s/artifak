import {
  AlignSelfProps,
  AlignItemsProps,
  AlignContentProps,
  DisplayProps,
  GridAreaProps,
  GridColumnProps,
  GridProps,
  GridRowProps,
  JustifySelfProps,
  JustifyItemsProps,
  JustifyContentProps,
  MaxHeightProps,
  MaxWidthProps,
  MinHeightProps,
  MinWidthProps,
  SpaceProps,
} from 'styled-system';

export type TGridProps =
  | AlignContentProps
  | AlignItemsProps
  | DisplayProps
  | GridProps
  | JustifyContentProps
  | JustifyItemsProps;

export type TGridItemProps =
  | AlignSelfProps
  | GridAreaProps
  | GridColumnProps
  | GridRowProps
  | JustifySelfProps
  | MaxHeightProps
  | MaxWidthProps
  | MinHeightProps
  | MinWidthProps
  | SpaceProps;
