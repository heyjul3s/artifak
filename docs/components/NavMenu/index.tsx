import styled, { css } from 'styled-components';
import { Grid, GridItem } from 'artifak';
import { FlexContainer, FlexItem } from './styled';
import { NavLink } from './components/NavLink';

const navMap = {
  Introduction: 'Introduction',
  Block: 'Block',
  Grid: 'Grid',
  Typography: 'Typography',
  Flex: 'Flex',
  Generator: 'Generator',
  Imagery: 'Imagery'
  // Forms: 'Forms',
  // Media: 'Media'
};

export function NavMenu() {
  return (
    <Grid columnWidth={`100px`}>
      <GridItem>
        <FlexContainer>
          <FlexItem>
            <NavMenuGrid gridGap={`0.2em`}>
              {Object.keys(navMap).map((key, i) => {
                return (
                  <NavLink
                    name={key}
                    query={{ content: navMap[key] }}
                    key={`${i}-${key}`}
                  />
                );
              })}
            </NavMenuGrid>
          </FlexItem>
        </FlexContainer>
      </GridItem>
    </Grid>
  );
}

const NavMenuGrid = styled(Grid)`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints[2]}) {
      grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
    }
  `}
`;
