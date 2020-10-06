import React from 'react';
import { GridItem } from 'artifak';
import { Container } from '../Container';
import { NavMenu } from '../NavMenu';
import { HeaderContainer, HeaderContent, HeaderGrid } from './styled';
import { Brand, HeaderInfo } from './components';

export function Header() {
  return (
    <HeaderContainer>
      <Container p={`40px 40px 30px`} bg={'rgba(241, 94, 34, 1)'}>
        <HeaderGrid>
          <GridItem>
            <Brand />
          </GridItem>

          <GridItem>
            <HeaderContent gridGap={0}>
              <HeaderInfo />
            </HeaderContent>
          </GridItem>

          <GridItem>
            <NavMenu />
          </GridItem>
        </HeaderGrid>
      </Container>
    </HeaderContainer>
  );
}
