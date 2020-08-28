import { Grid, GridItem } from 'artifak';

export function ColumnWidthDemo() {
  return (
    <Grid columnWidth="160px" pb={'1em'}>
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
    </Grid>
  );
}

export function ColumnWidthMqDemo() {
  return (
    <Grid columnWidth={['80px', '120px']} pb={'1em'}>
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
    </Grid>
  );
}

export function ColumnLengthDemo() {
  return (
    <Grid columnLength={3} pb={'1em'}>
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
    </Grid>
  );
}

export function ColumnLengthMqDemo() {
  return (
    <Grid columnLength={[1, 3, 6]} pb={'1em'}>
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
      <GridItemRando />
    </Grid>
  );
}

function GridItemRando() {
  return (
    <GridItem>
      <img
        src={'https://source.unsplash.com/random/200x200'}
        style={{
          objectFit: 'cover',
          width: '100%'
        }}
      />
    </GridItem>
  );
}
