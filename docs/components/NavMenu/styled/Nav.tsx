import styled from 'styled-components';
import { Grid } from 'artifak';

export const Nav = styled(Grid)`
  a {
    span {
      font-family: ${({ theme }) => theme.fontFamily.heading};
      font-weight: ${({ theme }) => theme.fontWeight.BOLD};
      padding-right: 0.5em;
    }
  }
`;
