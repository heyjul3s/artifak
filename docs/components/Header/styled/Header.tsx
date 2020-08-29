import styled, { css } from 'styled-components';
import { Grid } from 'artifak';

export const HeaderContainer = styled.header`
  padding: 6em;

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
`;

export const HeaderGrid = styled(Grid)`
  grid-auto-flow: dense;

  > div:first-child {
    justify-self: end;
    text-align: right;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints[2]}) {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));

      > div:nth-child(1) {
        grid-column: span 1;
      }

      > div:nth-child(2) {
        grid-column: span 2;
      }
    }
  `}
`;

export const HeaderContent = styled(Grid)`
  ${({ theme }) => css`
    padding: 1.5em 0 0.5em;

    @media (min-width: ${theme.breakpoints[2]}) {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));

      > div:nth-child(1) {
        grid-column: span 1;
      }

      > div:nth-child(2) {
        grid-column: span 2;
      }
    }
  `}
`;

export const HeaderInfoContainer = styled.div`
  display: block;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints[2]}) {
      display: inline-block;
    }
  `}
`;
