import { Grid, GridItem } from 'artifak';

export function GridColumnWidthDemo() {
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

export function GridColumnLengthDemo() {
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
