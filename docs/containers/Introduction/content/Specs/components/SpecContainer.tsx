import styled from 'styled-components';
import { Grid } from 'artifak';

export const SpecContainer = styled(Grid)`
  ${({ theme }) => `
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 1.5em;
    max-width: 700px;
    margin: 0 auto;
  `}
`

