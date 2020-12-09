import styled from 'styled-components';
import { H1, H2 } from '../../Typography';

export const BlockedSectionTitleContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 1.5em;

    &::after {
      flex: 1;
      background: ${theme.colors.primary};
      height: 1px;
      margin-bottom: 1em;
    }

    &::after {
      margin-left: 1em;
    }

    @media(min-width: ${theme.breakpoints[1]}) {
      &::after {
        content: '';
      }
    }
  `}
`;

export const BlockedSectionTitleText = styled(H1)`
  ${({ theme }) => `
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 0.1em 0.25em;
    width: 100%;

    @media(min-width: ${theme.breakpoints[1]}) {
      width: auto;
    }
  `}
`;
