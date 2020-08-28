export const gridExampleUsage = `
  import { Grid, GridItem } from 'artifak';

  export function BlockGallery () {
    return (
      <Grid>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
      <Grid/>
    )
  }
`;

export const columnWidthExample = `
  import { Grid, GridItem } from 'artifak';

  export function BlockGallery () {
    return (
      <Grid columnWidth={'240px'}>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
      <Grid/>
    )
  }
`;

export const columnWidthMqExample = `
  import { Grid, GridItem } from 'artifak';

  export function BlockGallery () {
    return (
      <Grid columnWidth={['120px', '240px', '480px']}>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
      <Grid/>
    )
  }
`;

export const columnLengthExample = `
  import { Grid, GridItem } from 'artifak';

  export function BlockGallery () {
    return (
      <Grid columnLength={2}>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
      <Grid/>
    )
  }
`;

export const columnLengthMqExample = `
  import { Grid, GridItem } from 'artifak';

  export function BlockGallery () {
    return (
      <Grid columnLength={[1, 2, 6]}>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
      <Grid/>
    )
  }
`;
