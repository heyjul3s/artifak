export const and = `
  import { media, screen } from 'artifak';
  import styled from 'styled-components';

  const Badge = styled.div\`
    display: none;
    margin: 0 auto;
    width: 100%;

    media({ screen, width: '>= 768px' })\`
      display: block;
    \`
  \`;
`;
