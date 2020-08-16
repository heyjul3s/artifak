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

export type TGridStyles = Partial<{
  columnWidth: string | undefined;
  columnLength: number | undefined;
  gap: string;
}>;

export type TGrid = {
  columnLength: number;
  rowLength: number;
  columnWidth: string;
  rowHeight: string;
  gap: string;
};

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
