import { Grid, GridItem } from 'artifak';

export function ColumnWidthDemo() {
  return (
    <Grid columnWidth="160px" pb={'1em'}>
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
    </Grid>
  );
}

export function ColumnWidthMqDemo() {
  return (
    <Grid columnWidth={['80px', '120px']} pb={'1em'}>
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
    </Grid>
  );
}

export function ColumnLengthDemo() {
  return (
    <Grid columnLength={3} pb={'1em'}>
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
    </Grid>
  );
}

export function ColumnLengthMqDemo() {
  return (
    <Grid columnLength={[1, 3, 6]} pb={'1em'}>
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
      <GridItemBlock />
    </Grid>
  );
}

function GridItemBlock() {
  return (
    <GridItem>
      <img
        src="/orange-block.svg"
        style={{
          objectFit: 'cover',
          width: '100%'
        }}
      />
    </GridItem>
  );
}
