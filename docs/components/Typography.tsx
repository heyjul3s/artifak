import styled from 'styled-components';
import { createTypographyComponents, fontWeight } from 'artifak';
import { theme } from '../theme';

const styles = {
  H1: {
    color: theme.colors.text,
    fontSize: [48, 56],
    fontWeight: fontWeight.bold,
    fontFamily: theme.fontFamily.poppins,
    margin: '0 0 0.5em',
    lineHeight: 1.15,
    as: 'h1'
  },

  H2: {
    color: theme.colors.text,
    fontSize: [24, 32, 40],
    fontWeight: fontWeight.bold,
    fontFamily: theme.fontFamily.poppins,
    lineHeight: 1.45,
    margin: '0 0 0.5em',
    as: 'h2'
  },

  H3: {
    color: theme.colors.text,
    fontSize: [27, 28, 30, 32],
    fontWeight: fontWeight.bold,
    fontFamily: theme.fontFamily.poppins,
    lineHeight: 1.45,
    margin: '0 0 0.5em',
    as: 'h3'
  },

  H4: {
    color: theme.colors.text,
    fontSize: [18, 20, 22, 24],
    fontWeight: fontWeight.bold,
    fontFamily: theme.fontFamily.poppins,
    lineHeight: 1.45,
    margin: '0 0 0.5em',
    as: 'h4'
  },

  H5: {
    color: theme.colors.text,
    fontWeight: fontWeight.bold,
    fontSize: [16, 17, 19, 21],
    fontFamily: theme.fontFamily.poppins,
    lineHeight: 1.45,
    margin: '0 0 0.5em',
    as: 'h5'
  },

  H6: {
    color: theme.colors.text,
    fontWeight: fontWeight.bold,
    fontSize: [16, 17, 19, 21],
    fontFamily: theme.fontFamily.poppins,
    lineHeight: 1.45,
    margin: '0 0 0.5em',
    as: 'h6'
  },

  LargeLead: {
    color: theme.colors.text,
    fontWeight: fontWeight.semiBold,
    fontSize: [18, 20, 22, 24],
    fontFamily: theme.fontFamily.poppins,
    marginTop: 0,
    marginBottom: '0.4em',
    as: 'p'
  },

  SmallLead: {
    color: theme.colors.text,
    fontWeight: fontWeight.semiBold,
    fontSize: [17, 18, 19, 21],
    fontFamily: theme.fontFamily.poppins,
    lineHeight: 1.45,
    as: 'p'
  },

  Paragraph: {
    color: theme.colors.text,
    fontSize: [16, 20],
    fontWeight: 300,
    fontFamily: theme.fontFamily.biryani,
    lineHeight: 1.45,
    marginTop: 0,
    as: 'p'
  },

  SmallParagraph: {
    color: theme.colors.text,
    fontSize: [12, 14],
    fontWeight: fontWeight.regular,
    fontFamily: theme.fontFamily.biryani,
    lineHeight: 1.45,
    marginTop: 0,
    as: 'p'
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
} = createTypographyComponents<typeof styles>(styles);

export const Strong = styled.strong`
  font-weight: ${({ theme }) => theme.fontWeight.BLACK};
`;
