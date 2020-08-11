import React from 'react';
import { GridSystem } from './GridSystem';
import { TGridProps } from './types';
import { createStyledComponent } from '@react-artifact/component-generator';

const GridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gridTemplateRows: 'repeat(3, 320px)',
  gridGap: '1.5rem',
  padding: '1.5rem 0',
};

export const Grid: React.FC = createStyledComponent<Partial<TGridProps>>(
  GridStyles,
  'GRID',
  GridSystem
);
