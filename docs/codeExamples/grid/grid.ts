export const columnWidthExample = `
  import { Grid, GridItem } from 'artifak';

  export function ImageGallery({ images }) {
     return (
      <Grid columnWidth="160px" pb={'1em'}>
        {images.map((image) => {
          return (
            <img src={image} />
          );
        })}
      </Grid>
    );
  }
`;

export const columnWidthMqExample = `
  import { Grid, GridItem } from 'artifak';

  export function ImageGallery() {
    return (
      <Grid columnWidth={['80px', '120px']} pb={'1em'}>
        {images.map((image) => {
          return (
            <img src={image} />
          );
        })}
      </Grid>
    );
  }
`;

export const columnLengthExample = `
  import { Grid, GridItem } from 'artifak';

  export function ImageGallery() {
    return (
      <Grid columnLength={3} pb={'1em'}>
        {images.map((image) => {
          return (
            <img src={image} />
          );
        })}
      </Grid>
    );
  }
`;

export const columnLengthMqExample = `
  import { Grid, GridItem } from 'artifak';

  export function ImageGallery () {
    return (
      <Grid columnLength={[1, 3, 6]} pb={'1em'}>
        {images.map((image) => {
          return (
            <img src={image} />
          );
        })}
      </Grid>
    );
  }
`;
