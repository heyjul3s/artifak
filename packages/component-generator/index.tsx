import * as React from 'react';
import { StyledComponent } from 'styled-components';

type TStyledReactComponent = StyledComponent<
  keyof JSX.IntrinsicElements | React.ComponentType<any>,
  any,
  any,
  any
>;

// TODO: add ref forwarding?
export function createStyledSystemComponents<SCS, SSC>(
  styledSystemComponent: TStyledReactComponent,
  systemComponentStyles: SCS
) {
  return Object.entries(systemComponentStyles).reduce((acc, entry) => {
    const [key, styles] = entry;
    acc[key] = createStyledComponent(styles, styledSystemComponent);
    acc[key].displayName = key;

    return acc;
  }, {} as SSC);
}

// TODO: add "as" prop to optionally create as other HTML element for when using inheritance?
export function createStyledComponent<StyledComponentProps>(
  styles,
  StyledReactComponent
): React.FC<StyledComponentProps> {
  const component: React.FC<StyledComponentProps> = (props) => (
    <StyledReactComponent {...styles} {...props}>
      {props.children}
    </StyledReactComponent>
  );

  return component;
}
