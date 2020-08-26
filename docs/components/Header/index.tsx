import React from 'react';
import { GridItem } from 'artifak';
import { Container } from '../Container';
import { NavMenu } from '../NavMenu';
import { HeaderContainer, HeaderContent, HeaderGrid } from './styled';
import { Brand, HeaderInfo, GithubMobile } from './components';

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <HeaderGrid>
          <GridItem>
            <Brand />
          </GridItem>

          <GridItem>
            <HeaderContent>
              <HeaderInfo />
              <NavMenu />
              <GithubMobile />
            </HeaderContent>
          </GridItem>
        </HeaderGrid>
      </Container>
    </HeaderContainer>
  );
}
