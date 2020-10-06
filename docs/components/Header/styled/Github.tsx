import styled from 'styled-components';
import { SmallParagraph } from '../../Typography';

export const GithubLinkContainer = styled(SmallParagraph)`
  margin-bottom: 0;

  > a {
    display: inline-block;
    font-weight: ${({ theme }) => theme.fontWeight.BOLD};
  }

  @media (min-width: 1025px) {
    display: block;
  }
`;
