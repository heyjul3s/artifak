export const columnWidthExample = `
  import { Grid, GridItem } from 'artifak';

  export function ImageGallery({ images }) {
     return (
      <Grid columnWidth="160px">
        {images.map((image) => {
          return (
            <img src={image}  style={{
              objectFit: 'cover',
              width: '100%'
            }}/>
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
      <Grid columnWidth={['80px', '120px']}>
        {images.map((image) => {
          return (
            <img src={image}  style={{
              objectFit: 'cover',
              width: '100%'
            }}/>
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
      <Grid columnLength={3}>
        {images.map((image) => {
          return (
            <img src={image}  style={{
              objectFit: 'cover',
              width: '100%'
            }}/>
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
      <Grid columnLength={[1, 3, 6]}>
        {images.map((image) => {
          return (
            <img src={image}  style={{
              objectFit: 'cover',
              width: '100%'
            }}/>
          );
        })}
      </Grid>
    );
  }
`;
