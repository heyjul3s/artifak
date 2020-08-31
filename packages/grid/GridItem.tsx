import React, { forwardRef } from 'react';
import { GridItemBase } from './GridItemBase';

export const GridItem = forwardRef((props: any, ref) => (
  <GridItemBase {...props} ref={ref}>
    {props.children}
  </GridItemBase>
));
