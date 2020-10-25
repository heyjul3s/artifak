import React from 'react';
import { FlexRowBase } from './FlexRowBase';
import { Property } from 'csstype';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const FlexRow = React.forwardRef((props: any, ref) => {
  const flexDirection = setFlexDirection(props.reverse);

  return (
    <FlexRowBase flexDirection={flexDirection} ref={ref} {...props}>
      {props.children}
    </FlexRowBase>
  );
});

export function setFlexDirection(isReverse: boolean): Property.FlexDirection {
  return !isReverse ? 'row' : 'row-reverse';
}
