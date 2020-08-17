import { StyledComponent } from 'styled-components';

export type TStyledReactComponent = StyledComponent<
  keyof JSX.IntrinsicElements | React.ComponentType<any>,
  any,
  any,
  any
>;
