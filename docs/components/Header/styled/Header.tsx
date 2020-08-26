import styled, { css } from 'styled-components';
import { Grid } from 'artifak';

export const HeaderContainer = styled.header`
  padding: 1em;

  @media (min-width: 1025px) {
    margin-top: 5em;
  }
`;

// TODO: use theme var for media query
export const HeaderGrid = styled(Grid)`
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(5, 80px);

  > div:nth-child(2) {
    justify-self: end;
  }

  > div:nth-child(3) {
    grid-column: span 2;
    grid-row: span 1;
  }

  @media (min-width: 769px) {
    > div:first-child {
      display: none;
    }

    > div:nth-child(2) {
      grid-column: span 4;
      grid-row: span 1;
      justify-self: end;
    }

    > div:nth-child(3) {
      grid-column: span 4;
      grid-row: span 1;
    }
  }

  @media (min-width: 1025px) {
    grid-template-rows: repeat(3, 80px);

    > div:nth-child(2) {
      grid-column: span 1;
      grid-row: span 1;
      justify-self: end;
      order: 2;
    }

    > div:nth-child(3) {
      margin-top: 2em;
    }
  }

  @media (min-width: 1200px) {
    > div:nth-child(3) {
      grid-column: 1/6;
    }
  }
`;

export const HeaderContent = styled(Grid)`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.border};
    border-bottom: 1px solid ${theme.colors.border};
  `}

  padding: 1.5em 0 0.5em;

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 400px;
  }
`;

export const HeaderInfoContainer = styled.div`
  display: block;

  @media (min-width: 1025px) {
    display: inline-block;
  }
`;
