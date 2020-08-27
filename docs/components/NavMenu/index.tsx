import { GridItem } from 'artifak';
import { FlexContainer, FlexItem, Nav } from './styled';
import { NavLink } from './components/NavLink';

const navMap = {
  Introduction: 'Introduction',
  Block: 'Block',
  Grid: 'Grid',
  Typography: 'Typography'
};

export function NavMenu() {
  return (
    <Nav columnWidth={`100px`}>
      <GridItem>
        <FlexContainer>
          <FlexItem>
            {Object.keys(navMap).map((key, i) => (
              <NavLink
                name={key}
                query={{ content: navMap[key] }}
                key={`${i}-${key}`}
              />
            ))}
          </FlexItem>
        </FlexContainer>
      </GridItem>
    </Nav>
  );
}
