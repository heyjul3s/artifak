import { createStyledComponent } from '@artifak/block';

import {
  gridArea,
  gridColumn,
  gridRow,
  justifySelf,
  alignSelf,
  AlignSelfProps,
  GridAreaProps,
  GridColumnProps,
  GridRowProps,
  JustifySelfProps,
} from 'styled-system';

export const GridItemBase = createStyledComponent<
  | AlignSelfProps
  | GridAreaProps
  | GridRowProps
  | GridColumnProps
  | JustifySelfProps
>({}, [alignSelf, gridArea, gridRow, gridColumn, justifySelf]);
