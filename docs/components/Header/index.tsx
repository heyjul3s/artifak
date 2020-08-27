import React from 'react';
import { GridItem } from 'artifak';
import { Container } from '../Container';
import { NavMenu } from '../NavMenu';
import { HeaderContainer, HeaderContent, HeaderGrid } from './styled';
import { Brand, HeaderInfo } from './components';

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
            </HeaderContent>
          </GridItem>
        </HeaderGrid>
      </Container>
    </HeaderContainer>
  );
}
