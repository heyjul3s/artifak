import React from 'react';
import { FlexRow, FlexCol } from 'artifak';
import { SmallParagraph } from '../Typography';
import styled, { css } from 'styled-components';
import { Container } from './Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container pr={`1em`} pl={`1em`}>
      <StyledFooter>
        <FlexRow justifyContent="center">
          <FlexCol columnSize={[6]} pl={0}>
            <FooterBrandText>
              artifak
              <FooterBrandTagline>
                a React UI primitives library
              </FooterBrandTagline>
            </FooterBrandText>
          </FlexCol>

          <FlexCol
            columnSize={[6]}
            display="flex"
            justifyContent="flex-end"
            pr={0}
          >
            <FooterCopyright>
              created by Julian Low 2020 - {currentYear}
            </FooterCopyright>
          </FlexCol>
        </FlexRow>
      </StyledFooter>
    </Container>
  );
}

const FooterText = styled.p`
  ${({ theme }) => css`
    font-size: 0.9rem;
    font-family: ${theme.fontFamily.biryani};
    color: ${theme.colors.grey};
  `}
`;

const FooterBrandText = styled.p`
  ${({ theme }) => css`
    font-size: 1.1rem;
    font-family: ${theme.fontFamily.poppins};
    color: ${theme.colors.primary};
    margin: 0;
  `}
`;

const FooterBrandTagline = styled.span`
  ${({ theme }) => css`
    font-size: 0.9rem;
    font-family: ${theme.fontFamily.biryani};
    padding-left: 0.25em;
    color: ${theme.colors.grey};
    margin: 0;
  `}
`;

const FooterCopyright = styled.p`
  ${({ theme }) => css`
    font-size: 0.9rem;
    font-family: ${theme.fontFamily.biryani};
    color: ${theme.colors.grey};
    margin: 0;
  `}
`;

const StyledFooter = styled.footer`
  ${({ theme }) => css`
    padding: 2em 0;
    border-top: 1px solid ${theme.colors.primary};
    font-family: ${theme.fontFamily.heading};
  `}
`;
