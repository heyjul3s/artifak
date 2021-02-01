export const max = `
  import { media } from 'artifak';
  import styled from 'styled-components';

  const Badge = styled.div\`
    display: none;
    margin: 0 auto;
    width: 100%;

    \${media({ width: '<= 768px' })\`
      display: block;
    \`}
  \`;
`;
