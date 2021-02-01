export const fluidSizingExampleUsage = `
  import styled from 'styled-components';
  import { fluidSizing } from 'artifak';

  export const LargeLeadText = styled.p\`
    color: hotpink;
    font-size: \${fluidSizing(1.3, 1.5, 300, 1200, 'rem')};
    padding-bottom: \${fluidSizing(10, 15, 300, 1200, 'px')}
  \`;
`;
