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
  columnWidth: string | undefined;
  columnLength: number | undefined;
  gap: string;
}>;

export type GridProps = {
  columnLength: number;
  rowLength: number;
  columnWidth: string;
  rowHeight: string;
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
