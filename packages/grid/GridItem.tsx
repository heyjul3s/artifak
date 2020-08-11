import React from 'react';
import { GridItemSystem } from './GridSystem';
import { TGridItemProps } from './types';
import { createStyledComponent } from '@react-artifact/component-generator';

export const GridItem: React.FC = createStyledComponent<
  Partial<TGridItemProps>
>({}, 'GRID_ITEM', GridItemSystem);
