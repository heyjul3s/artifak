import { GridItem } from 'artifak';
import { Container } from '../Container';
import { NavMenu } from '../NavMenu/NavMenu';

import {
  HeaderContainer,
  HeaderContent,
  HeaderGrid,
  NavToggle
} from './styled';

import { Brand, HeaderInfo, GithubMobile } from './components';

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderGrid>
          <GridItem>
            <NavToggle />
          </GridItem>

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
};
