import * as React from 'react';
import { TStyledReactComponent } from './typings';

export function createComponents<SCS, SSC>(
  styledSystemComponent: TStyledReactComponent,
  systemComponentStyles: SCS
) {
  if (!styledSystemComponent || !systemComponentStyles) {
    return void 0;
  }

  return Object.entries(systemComponentStyles).reduce((acc, entry) => {
    const [key, styles] = entry;
    acc[key] = createComponent(styledSystemComponent, styles);
    acc[key].displayName = key;

    return acc;
  }, {} as SSC);
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
