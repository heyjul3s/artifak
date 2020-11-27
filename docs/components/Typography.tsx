import styled from 'styled-components';
import { createTypographyComponents, fontWeight } from 'artifak';
import { theme } from '../theme';

const settings = {
  H1: {
    styles: {
      fontSize: [48, 56],
      fontFamily: theme.fontFamily.poppins,
      margin: '0 0 0.5em',
      lineHeight: 1.5,
      as: 'h1'
    }
  },

  H2: {
    styles: {
      fontSize: [24, 32, 40],
      fontFamily: theme.fontFamily.poppins,
      lineHeight: 1.45,
      margin: '0 0 0.5em',
      as: 'h2'
    }
  },

  H3: {
    styles: {
      fontSize: [24, 28, 30, 32],
      fontFamily: theme.fontFamily.poppins,
      lineHeight: 1.45,
      margin: '0 0 0.5em',
      as: 'h3'
    }
  },

  H4: {
    styles: {
      fontSize: [18, 20, 22, 24],
      fontFamily: theme.fontFamily.poppins,
      lineHeight: 1.45,
      margin: '0 0 0.5em',
      as: 'h4'
    }
  },

  H5: {
    styles: {
      fontSize: [16, 17, 19, 21],
      fontFamily: theme.fontFamily.poppins,
      lineHeight: 1.45,
      margin: '0 0 0.5em',
      as: 'h5'
    }
  },

  H6: {
    styles: {
      fontSize: [16, 17, 19, 21],
      fontFamily: theme.fontFamily.poppins,
      lineHeight: 1.45,
      margin: '0 0 0.5em',
      as: 'h6'
    }
  },

  LargeLead: {
    styles: {
      color: theme.colors.primary,
      fontWeight: fontWeight.semiBold,
      fontSize: [18, 20, 22, 24],
      fontFamily: theme.fontFamily.poppins,
      marginTop: 0,
      marginBottom: '0.4em',
      as: 'p'
    }
  },

  SmallLead: {
    styles: {
      color: theme.colors.text,
      fontWeight: fontWeight.semiBold,
      fontSize: [17, 18, 19, 21],
      fontFamily: theme.fontFamily.poppins,
      lineHeight: 1.45,
      marginTop: 0,
      as: 'p'
    }
  },

  Paragraph: {
    styles: {
      fontSize: ['1rem', '1.1rem'],
      fontWeight: 300,
      fontFamily: theme.fontFamily.biryani,
      lineHeight: 1.45,
      marginTop: 0,
      as: 'p'
    }
  },

  SmallParagraph: {
    styles: {
      fontSize: [12, 14],
      fontWeight: fontWeight.regular,
      fontFamily: theme.fontFamily.biryani,
      lineHeight: 1.45,
      marginTop: 0,
      as: 'p'
    }
  }
};

export const {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  LargeLead,
  SmallLead,
  Paragraph,
  SmallParagraph
} = createTypographyComponents<typeof settings>(settings);

export const Strong = styled.strong`
  font-weight: ${({ theme }) => theme.fontWeight.BLACK};
`;
