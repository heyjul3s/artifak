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

export type SetGridStyles = Partial<{
  columnWidth?: string | string[];
  columnLength?: number | number[];
  gap: string;
}>;

export type GridProps = {
  columnLength?: number | number[];
  columnWidth?: string | string[];
  gap: string;
};

export type GridSystemProps =
  | AlignContentProps
  | AlignItemsProps
  | DisplayProps
  | GridProps
  | JustifyContentProps
  | JustifyItemsProps;

export type GridItemSystemProps =
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
