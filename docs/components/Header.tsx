import { Grid, GridItem } from 'artifak';
import styled, { css } from 'styled-components';
import { Container } from './Container';
import { Paragraph, LargeLead } from './Typography';
import { NavMenu } from './NavMenu';
import { AnchorLink } from './AnchorLink';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderGrid>
          <GridItem>
            <NavToggle />
          </GridItem>

          <GridItem>
            <LogoLink href="/">
              <Logo />
            </LogoLink>
          </GridItem>

          <GridItem>
            <HeaderContent>
              <ReleaseTag>
                <LargeLead fontSize={[24, 36]} marginBottom="0.15em">
                  R 1.0.2
                </LargeLead>

                <Paragraph>A React UI primitives library</Paragraph>

                <GithubLink>
                  Source on{' '}
                  <AnchorLink href="https://github.com/heyjul3s/artifak">
                    Github
                  </AnchorLink>
                </GithubLink>
              </ReleaseTag>

              <NavMenu />

              <MobileGithubLink>
                Source on{' '}
                <AnchorLink href="https://github.com/heyjul3s/artifak">
                  Github
                </AnchorLink>
              </MobileGithubLink>
            </HeaderContent>
          </GridItem>
        </HeaderGrid>
      </Container>
    </StyledHeader>
  );
};

const HeaderGrid = styled(Grid)`
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(5, 80px);

  > div:nth-child(2) {
    justify-self: end;
  }

  > div:nth-child(3) {
    grid-column: span 2;
    grid-row: span 1;
  }

  @media (min-width: 769px) {
    > div:first-child {
      display: none;
    }

    > div:nth-child(2) {
      grid-column: span 4;
      grid-row: span 1;
      justify-self: end;
    }

    > div:nth-child(3) {
      grid-column: span 4;
      grid-row: span 1;
    }
  }

  @media (min-width: 1025px) {
    grid-template-rows: repeat(3, 80px);

    > div:nth-child(2) {
      grid-column: span 1;
      grid-row: span 1;
      justify-self: end;
      order: 2;
    }

    > div:nth-child(3) {
      margin-top: 2em;
    }
  }

  @media (min-width: 1200px) {
    > div:nth-child(3) {
      grid-column: 1/6;
    }
  }
`;

const HeaderContent = styled(Grid)`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.border};
    border-bottom: 1px solid ${theme.colors.border};
  `}

  padding: 1.5em 0 0.5em;

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 400px;
  }
`;

const NavToggle = styled.div`
  position: relative;
  top: 18px;
  width: 36px;
  height: 36px;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 6px;
    background: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 6px;
  }

  &::before {
    top: 10px;
  }

  &::after {
    top: 24px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledHeader = styled.header`
  padding: 1em;

  @media (min-width: 1025px) {
    margin-top: 5em;
  }
`;

const LogoLink = styled(AnchorLink)`
  > svg {
    width: 60px;
  }

  @media (min-width: 1025px) {
    > svg {
      width: 160px;
    }
  }
`;

const GithubLink = styled(Paragraph)`
  display: none;

  > a {
    display: inline-block;
    font-weight: ${({ theme }) => theme.fontWeight.BOLD};
  }

  @media (min-width: 1025px) {
    display: block;
  }
`;

const MobileGithubLink = styled(Paragraph)`
  > a {
    display: inline-block;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

const ReleaseTag = styled.div`
  display: block;

  @media (min-width: 1025px) {
    display: inline-block;
  }
`;
