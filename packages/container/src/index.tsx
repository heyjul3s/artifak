import React from 'react';
import { createStyledComponent, BaseProps } from '@artifak/component-generator';

export function Container({ children, ...props }) {
  return <ContainerBase {...props}>{children}</ContainerBase>;
}

const ContainerBase = createStyledComponent<BaseProps<any>>({
  styles: {
    margin: '0 auto',
    width: '100%'
  }
});
