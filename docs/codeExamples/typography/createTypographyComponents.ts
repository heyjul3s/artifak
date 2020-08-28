export const createTypographComponentsExampleUsage = `
  import { createTypographyComponents, fontWeight } from 'artifak';
  import { theme } from '../theme';

  const styles = {
    H1: {
      color: theme.colors.text,
      fontSize: [48, 96],
      fontWeight: fontWeight.bold,
      fontFamily: theme.fontFamily.arial,
      margin: '0 0 0.25em',
      lineHeight: 1.15,
      as: 'h1'
    },

    H2: {
      color: theme.colors.text,
      fontSize: [37, 39, 41, 43],
      fontWeight: fontWeight.bold,
      fontFamily: theme.fontFamily.arial,
      lineHeight: 1.45,
      marginTop: 0,
      as: 'h2'
    },

    H3: {
      color: theme.colors.text,
      fontSize: [27, 28, 30, 32],
      fontWeight: fontWeight.bold,
      fontFamily: theme.fontFamily.arial,
      lineHeight: 1.45,
      as: 'h3'
    },

    H4: {
      color: theme.colors.text,
      fontSize: [18, 20, 22, 24],
      fontWeight: fontWeight.bold,
      fontFamily: theme.fontFamily.arial,
      lineHeight: 1.45,
      marginTop: 0,
      as: 'h4'
    },

    H5: {
      color: theme.colors.text,
      fontWeight: fontWeight.bold,
      fontSize: [16, 17, 19, 21],
      fontFamily: theme.fontFamily.arial,
      lineHeight: 1.45,
      marginTop: 0,
      as: 'h5'
    },

    H6: {
      color: theme.colors.text,
      fontWeight: fontWeight.bold,
      fontSize: [16, 17, 19, 21],
      fontFamily: theme.fontFamily.arial,
      lineHeight: 1.45,
      marginTop: 0,
      as: 'h6'
    },
  };

  export const {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
  } = createTypographyComponents<typeof styles>(styles);
`;

export const createTypographyComponentsDemo = `
  import { H1 } from '../path/to/where/your/typography/components/are/generated;

  export function Article() {
    return (
      <H1>Hello World</H1>
    );
  }
`;
