export const setupExample = `
  // For example, let's say we created a new file called Typography
  // and then add the following
  import { createTypography } from 'artifak';
  import { theme } from './theme';

  const base = {
    styles: {
      fontFamily: theme.fonts.primary,
      marginTop: 0
    }
  }

  const config = {
    Heading1: {
      fontSize: ['36px', '42px', '48px']
      lineHeight: 1.4,
      margin: '0 0 0.5em',
      as: 'h1'
    },

    Heading2: {
      fontSize: ['32px', '38px', '44px']
      lineHeight: 1.4,
      margin: '0 0 0.5em',
      as: 'h2'
    }

    Paragraph: {
      fontSize: ['14px', '18px'],
      lineHeight: 1.45,
      margin: '0 0 0.25em',
      as: 'p'
    }
  };

  const {
    Heading1,
    Heading2,
    Paragraph
  } = createTypographyComponents<typeof styles>(styles);
`;
