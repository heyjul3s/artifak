import styled from 'styled-components';
import { AnchorLink } from './AnchorLink';
import { Grid, GridItem } from 'artifak';

export function NavMenu() {
  return (
    <Nav columnWidth={`100px`}>
      <GridItem>
        <FlexContainer>
          <Flex>
            <AnchorLink href="/">
              <>
                <span>00</span>
                Introduction
              </>
            </AnchorLink>

            <AnchorLink href="/">
              <>
                <span>01</span>
                Block
              </>
            </AnchorLink>

            <AnchorLink href="/">
              <>
                <span>02</span>Grid
              </>
            </AnchorLink>
          </Flex>

          <Flex>
            <AnchorLink href="/">
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
          </Flex>
        </FlexContainer>
      </GridItem>
    </Nav>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    flex-direction: row;
    padding-top: 0.5em;

    > div {
      flex: 1 1 50%;
      padding-left: 1em;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;

  a {
    padding-bottom: 15px;
  }
`;

const Nav = styled(Grid)`
  a {
    span {
      font-family: ${({ theme }) => theme.fontFamily.heading};
      font-weight: ${({ theme }) => theme.fontWeight.BOLD};
      padding-right: 0.5em;
    }
  }
`;
