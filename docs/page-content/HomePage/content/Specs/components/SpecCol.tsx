import styled from 'styled-components';
import { GridItem } from 'artifak';

export const SpecCol = styled(GridItem)`
  ${({ theme }) => `
    border: 1px solid ${theme.colors.white};
    padding: 2em;
  `}
`;