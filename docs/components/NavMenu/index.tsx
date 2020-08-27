import { Grid, GridItem } from 'artifak';
import { FlexContainer, FlexItem } from './styled';
import { NavLink } from './components/NavLink';

const navMap = {
  Introduction: 'Introduction',
  Block: 'Block',
  Grid: 'Grid',
  Typography: 'Typography'
};

export function NavMenu() {
  return (
    <Grid columnWidth={`100px`}>
      <GridItem>
        <FlexContainer>
          <FlexItem>
            {Object.keys(navMap).map((key, i) => {
              const marker = i.toString().length === 1 ? `0${i}` : i.toString();

              return (
                <NavLink
                  marker={marker}
                  name={key}
                  query={{ content: navMap[key] }}
                  key={`${i}-${key}`}
                />
              );
            })}
          </FlexItem>
        </FlexContainer>
      </GridItem>
    </Grid>
  );
}
