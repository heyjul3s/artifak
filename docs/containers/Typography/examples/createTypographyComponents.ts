export const createTypographComponentsExampleUsage = `
  import { createTypographyComponents, fontWeight } from 'artifak';
  import { theme } from '../theme';

  const commonHeadingStyles = {
    color: theme.colors.text,
    fontFamily: theme.fontFamily.arial,
  }

  const styles = {
    H1: {
      ...commonHeadingStyles
      fontSize: [48, 96],
      margin: '0 0 0.25em',
      lineHeight: 1.15,
      as: 'h1'
    },

    H2: {
      ...commonHeadingStyles
      fontSize: [37, 39, 41, 43],
      lineHeight: 1.45,
      marginTop: 0,
      as: 'h2'
    },

    H3: {
      ...commonHeadingStyles
      fontSize: [27, 28, 30, 32],
      lineHeight: 1.45,
      as: 'h3'
    },

    H4: {
      ...commonHeadingStyles
      fontSize: [18, 20, 22, 24],
      lineHeight: 1.45,
      marginTop: 0,
      as: 'h4'
    },

    H5: {
      ...commonHeadingStyles
      fontSize: [16, 17, 19, 21],
      lineHeight: 1.45,
      marginTop: 0,
      as: 'h5'
    },

    H6: {
      ...commonHeadingStyles
      fontSize: [16, 17, 19, 21],
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
  import { H1 } from '../path/to/where/your/typography/components/are/generated';

  export function Article() {
    return (
      <H1>Hello World</H1>
    );
  }
`;
