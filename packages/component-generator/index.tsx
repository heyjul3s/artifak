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
    acc[key] = createStyledComponent(styles, key, styledSystemComponent);

    return acc;
  }, {} as SSC);
}

// TODO: add "as" prop to optionally create as other HTML element for when using inheritance?
export function createStyledComponent<StyledComponentProps>(
  styles,
  displayName,
  StyledReactComponent
): React.FC<StyledComponentProps> {
  const component: React.FC<StyledComponentProps> = (props) => (
    <StyledReactComponent {...styles} {...props}>
      {props.children}
    </StyledReactComponent>
  );

  component.displayName = displayName;

  return component;
}

// * original createComponent with arrow functions
// export const createComp: <StyledSystemProps>(
//   styles: StyledSystemProps,
//   displayName: string,
//   StyledReactComponent: TStyledReactComponent
// ) => React.FC<StyledSystemProps> = (styles, displayName, StyledReactComponent) => {
//   const component = (props) => (
//     <StyledReactComponent {...styles} {...props}>
//       {props.children}
//     </StyledReactComponent>
//   );

//   component.displayName = displayName;
//   return component;
// };
