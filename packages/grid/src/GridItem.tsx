import React from 'react';
import { GridItemBase } from './GridItemBase';

export const GridItem = React.forwardRef((props: any, ref) => (
  <GridItemBase {...props} ref={ref}>
    {props.children}
  </GridItemBase>
));
