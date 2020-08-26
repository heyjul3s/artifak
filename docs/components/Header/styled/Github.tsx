import styled from 'styled-components';
import { Paragraph } from '../../Typography';

export const GithubLinkContainer = styled(Paragraph)`
  display: none;

  > a {
    display: inline-block;
    font-weight: ${({ theme }) => theme.fontWeight.BOLD};
  }

  @media (min-width: 1025px) {
    display: block;
  }
`;

export const GithubMobileLinkContainer = styled(Paragraph)`
  > a {
    display: inline-block;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;
