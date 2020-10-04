import React from 'react';
import { FlexRowBase } from './FlexRowBase';

export const FlexRow = React.forwardRef((props: any, ref) => {
  const flexDirection = setFlexDirection(props.reverse);

  return (
    <FlexRowBase flexDirection={flexDirection} ref={ref} {...props}>
      {props.children}
    </FlexRowBase>
  );
});

export function setFlexDirection(isReverse: boolean) {
  return !isReverse ? 'row' : 'row-reverse';
}
