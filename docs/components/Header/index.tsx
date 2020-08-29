import React from 'react';
import { GridItem } from 'artifak';
import { Container } from '../Container';
import { NavMenu } from '../NavMenu';
import { HeaderContainer, HeaderContent, HeaderGrid } from './styled';
import { Brand, HeaderInfo } from './components';

export function Header() {
  return (
    <HeaderContainer>
      <Container p={30} bg={'rgba(241, 94, 34, 1)'}>
        <HeaderGrid>
          <GridItem>
            <Brand />
          </GridItem>

          <GridItem
            style={{
              borderTop: '1px solid #D0D0D9',
              borderBottom: '1px solid #D0D0D9'
            }}
          >
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
