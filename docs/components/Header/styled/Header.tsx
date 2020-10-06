import styled, { css } from 'styled-components';
import { Grid } from 'artifak';

export const HeaderContainer = styled.header`
  padding: 2em;

  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 7px,
    rgba(241, 94, 34, 1) 1px,
    rgba(241, 94, 34, 1) 8px
  );

  border-top: 16px solid rgba(241, 94, 34, 1);
  border-bottom: 16px solid rgba(241, 94, 34, 1);

  p,
  a {
    color: #fff;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints[2]}) {
      padding: 6em 1em;
    }
  `}
`;

export const HeaderGrid = styled(Grid)`
  grid-auto-flow: dense;

  > div:first-child {
    justify-self: end;
    text-align: right;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints[2]}) {
      grid-template-columns: 25% 20% auto;
    }
  `}
`;

export const HeaderContent = styled(Grid)`
  ${({ theme }) => css`
    padding: 0 0 0.5em;
  `}
`;

export const HeaderInfoContainer = styled.div`
  display: block;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints[2]}) {
      display: inline-block;
      padding-left: 1em;
    }
  `}
`;
