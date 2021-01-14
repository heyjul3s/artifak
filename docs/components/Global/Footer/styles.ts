import styled, { css } from 'styled-components';

export const FooterBrandText = styled.p`
  ${({ theme }) => css`
    font-size: 1.1rem;
    font-family: ${theme.fontFamily.poppins};
    color: ${theme.colors.primary};
    margin: 0;

    @media (hover: none) {
      text-align: center;
    }
  `}
`;

export const FooterBrandTagline = styled.span`
  ${({ theme }) => css`
    font-size: 0.9rem;
    font-family: ${theme.fontFamily.biryani};
    padding-left: 0.25em;
    color: ${theme.colors.grey};
    margin: 0;
  `}
`;

export const FooterCopyright = styled.p`
  ${({ theme }) => css`
    font-size: 0.9rem;
    font-family: ${theme.fontFamily.biryani};
    color: ${theme.colors.grey};
    margin: 0;

    @media (hover: none) {
      text-align: center;
    }
  `}
`;

export const StyledFooter = styled.footer<{ isHome: boolean }>`
  ${({ theme, isHome }) => css`
    padding: 2em 0;
    border-top: 1px solid ${theme.colors.primary};
    font-family: ${theme.fontFamily.heading};

    @media (hover: none) {
      padding: ${isHome ? '2em 0' : '2em 0 90px'};
    }
  `}
`;
