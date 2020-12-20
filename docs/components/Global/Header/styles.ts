import styled from 'styled-components';
import { AnchorLink } from '../../AnchorLink';

export const HeaderContainer = styled.header`
  padding: 2em 0 0;

  ${({ theme }) => `
    @media(min-width: ${theme.breakpoints[0]}) {
      padding: 5em 0 0;
    }
  `}
`;

export const GetStartedButton = styled(AnchorLink)`
  padding: 1em 1em 0.8em;
  display: block;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
  margin: 0 auto;
  max-width: 120px;
  width: 100%;

  ${({ theme }) => `
    color: ${theme.colors.primary};
    border: 3px solid  ${theme.colors.primary};
  `}
`;
