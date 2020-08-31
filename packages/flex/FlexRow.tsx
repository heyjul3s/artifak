import React, { forwardRef } from 'react';
import { createFlexBase } from './FlexBase';

type Props = {
  reverse?: boolean;
};

export const StyledFlexRow = createFlexBase<Props>({
  display: 'flex',
  flex: '0 1 auto',
  flexWrap: 'wrap',
});

export const FlexRow = forwardRef((props: any, ref) => {
  return (
    <StyledFlexRow
      flexDirection={setFlexDirection(props.reverse)}
      ref={ref}
      {...props}
    >
      {props.children}
    </StyledFlexRow>
  );
});

export function setFlexDirection(isReverse: boolean) {
  return !isReverse ? 'row' : 'row-reverse';
}
