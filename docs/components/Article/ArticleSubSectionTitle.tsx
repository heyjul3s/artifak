import styled from 'styled-components';
import { H2 } from '../Typography';

export const ArticleSubSectionTitle = styled(H2)`
  ${({ theme }) => `
    color: ${theme.colors.primary};
  `}
`;
