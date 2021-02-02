import styled from 'styled-components';
import { createTypography, fontWeight } from 'artifak';
import { theme } from '../theme';

const headings = {
  base: {
    styles: {
      margin: '0 0 0.5em',
      fontFamily: theme.fontFamily.poppins
    }
  },
  components: {
    H1: {
      fontSize: [36, 48, 56],
      lineHeight: 1.5,
      as: 'h1'
    },

    H2: {
      fontSize: [24, 32, 40],
      lineHeight: 1.45,
      as: 'h2'
    },

    H3: {
      fontSize: [24, 28, 30, 32],
      lineHeight: 1.45,
      as: 'h3'
    },

    H4: {
      fontSize: [18, 20, 22, 24],
      lineHeight: 1.45,
      as: 'h4'
    },

    H5: {
      fontSize: [16, 17, 19, 21],
      lineHeight: 1.45,
      as: 'h5'
    },

    H6: {
      fontSize: [16, 17, 19, 21],
      lineHeight: 1.45,
      as: 'h5'
    }
  }
};

const text = {
  base: {
    styles: {
      lineHeight: 1.45
    }
  },

  components: {
    LargeLead: {
      color: theme.colors.primary,
      fontWeight: fontWeight.semiBold,
      fontSize: [18, 20, 22, 24],
      fontFamily: theme.fontFamily.poppins,
      marginBottom: '0.4em',
      as: 'p'
    },

    SmallLead: {
      color: theme.colors.text,
      fontWeight: fontWeight.semiBold,
      fontSize: [17, 18, 19, 21],
      fontFamily: theme.fontFamily.poppins,
      as: 'p'
    },

    Paragraph: {
      fontSize: ['1rem', '1.1rem'],
      fontWeight: 300,
      fontFamily: theme.fontFamily.biryani,
      as: 'p'
    },

    SmallParagraph: {
      fontSize: [12, 14],
      fontWeight: fontWeight.regular,
      fontFamily: theme.fontFamily.biryani,
      as: 'p'
    }
  }
};

export const { H1, H2, H3, H4, H5, H6 } = createTypography(
  headings.base,
  headings.components
);

export const {
  LargeLead,
  SmallLead,
  Paragraph,
  SmallParagraph
} = createTypography(text.base, text.components);

export const Strong = styled.strong`
  font-weight: ${({ theme }) => theme.fontWeight.BLACK};
`;
