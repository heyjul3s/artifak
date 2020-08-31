import * as React from 'react';
import { StyledReactComponent } from './typings';

export function createComponents<ST, SC>(
  SystemComponent: StyledReactComponent,
  styles: ST
): { [key in keyof ST]: React.FC<SC> } {
  return Object.entries(styles).reduce((acc, entry) => {
    const [key, styles] = entry;
    acc[key] = createComponent<SC, ST>(SystemComponent, styles);
    acc[key].displayName = key;

    return acc;
  }, {}) as { [key in keyof ST]: React.FC<SC> };
}

export function createComponent<SC, ST>(
  StyledReactComponent,
  styles: ST
): React.FC<SC> {
  return (props) => (
    <StyledReactComponent {...styles} {...props}>
      {props.children}
    </StyledReactComponent>
  );
}
