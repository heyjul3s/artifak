import React from 'react';
import { SmallParagraph } from './Typography';
import styled, { css } from 'styled-components';
import { Container } from './Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container pr={`1em`} pl={`1em`}>
      <StyledFooter>
        <SmallParagraph>
          <span>julian low</span> ©️ {currentYear}
        </SmallParagraph>
      </StyledFooter>
    </Container>
  );
}

const StyledFooter = styled.footer`
  ${({ theme }) => css`
    padding: 2em 0;
    border-top: 1px solid ${theme.colors.border};
    font-family: ${theme.fontFamily.heading};

    > p {
      > span {
        color: ${theme.colors.primary};
      }
    }
  `}
`;
