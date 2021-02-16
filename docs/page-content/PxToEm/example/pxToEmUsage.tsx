export const pxToEmUsage = `
  import { pxToEm } from 'artifak';
  import styled from 'styled-components';

  // const EMvalue = pxtoRem('16px');
  // console.log(EMvalue); // prints '1em'

  const Container = styled.div\`
    margin: 0 auto;
    width: 100%;
    padding: 0 \$\{pxToEm('16px')\}
  \`;
`;
