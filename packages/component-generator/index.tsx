import * as React from 'react';
import { StyledReactComponent } from './typings';

export function createComponents<ST, SC>(
  SystemComponent: StyledReactComponent,
  styles: ST
) {
  if (!SystemComponent || !styles) {
    return void 0;
  }

  return Object.entries(styles).reduce((acc, entry) => {
    const [key, styles] = entry;
    acc[key] = createComponent(SystemComponent, styles);
    acc[key].displayName = key;

    return acc;
  }, {} as SC);
}

export function createComponent<StyledComponentProps>(
  StyledReactComponent,
  styles
): React.FC<StyledComponentProps> {
  return (props) => (
    <StyledReactComponent {...styles} {...props}>
      {props.children}
    </StyledReactComponent>
  );
}
