import React from 'react';
import { GridItemBase } from './GridItemBase';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const GridItem = React.forwardRef((props: any, ref) => (
  <GridItemBase {...props} ref={ref}>
    {props.children}
  </GridItemBase>
));
