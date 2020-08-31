import React, { forwardRef } from 'react';
import { FlexRowBase } from './FlexBase';

export const FlexRow = forwardRef((props: any, ref) => {
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
