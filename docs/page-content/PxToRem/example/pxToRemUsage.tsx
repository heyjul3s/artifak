export const pxToRemUsage = `
  import { pxToRem } from 'artifak';
  import styled from 'styled-components';

  const Container = styled.div\`
    margin: 0 auto;
    width: 100%;
    font-size: \$\{pxToRem('48px')\}
  \`;
`;
