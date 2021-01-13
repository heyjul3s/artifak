import React from 'react';
import { FlexRow, FlexCol } from 'artifak';
import { Container } from '../Container';
import {
  FooterBrandText,
  FooterBrandTagline,
  FooterCopyright,
  StyledFooter
} from './styles';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container pr={`1em`} pl={`1em`}>
      <StyledFooter>
        <FlexRow justifyContent="center">
          <FlexCol columnSize={[12, 6]} pl={0}>
            <FooterBrandText>
              artifak
              <FooterBrandTagline>
                a React UI primitives library
              </FooterBrandTagline>
            </FooterBrandText>
          </FlexCol>

          <FlexCol
            columnSize={[12, 6]}
            display="flex"
            justifyContent={['center', 'flex-end']}
            p={['0.5em 0 0', 0]}
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
