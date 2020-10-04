import React from 'react';
import { FlexRowBase } from './FlexRowBase';

export const FlexRow = React.forwardRef((props: any, ref) => {
  return (
    <FlexRowBase
      flexDirection={setFlexDirection(props.reverse)}
      ref={ref}
      {...props}
    >
      {props.children}
    </FlexRowBase>
  );
});

export function setFlexDirection(isReverse: boolean) {
  return !isReverse ? 'row' : 'row-reverse';
}
