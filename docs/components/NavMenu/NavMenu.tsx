import { AnchorLink } from '../AnchorLink';
import { GridItem } from 'artifak';
import { FlexContainer, FlexItem, Nav } from './styled';

export function NavMenu() {
  return (
    <Nav columnWidth={`100px`}>
      <GridItem>
        <FlexContainer>
          <FlexItem>
            <AnchorLink href="/">
              <>
                <span>00</span>
                Introduction
              </>
            </AnchorLink>

            <AnchorLink href="/block">
              <>
                <span>01</span>
                Block
              </>
            </AnchorLink>

            <AnchorLink href="/grid">
              <>
                <span>02</span>Grid
              </>
            </AnchorLink>
          </FlexItem>

          <FlexItem>
            <AnchorLink href="/typography">
              <>
                <span>03</span>Typography
              </>
            </AnchorLink>

            <AnchorLink href="/">
              <>
                <span>04</span>Flex
              </>
            </AnchorLink>

            <AnchorLink href="/">
              <>
                <span>05</span>Image
              </>
            </AnchorLink>
          </FlexItem>
        </FlexContainer>
      </GridItem>
    </Nav>
  );
}
