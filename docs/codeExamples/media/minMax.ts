export const minMax = `
  import { media } from 'artifak';
  import styled from 'styled-components';

  const Container = styled.div\`
    margin: 0 auto;
    width: 100%;

    media({ width: '768px >= width <= 1200px' })\`
      max-width: 680px;
      background: red;
    \`
  \`;
`;
