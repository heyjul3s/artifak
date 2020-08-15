import React from 'react';
import {
  createTypographyComponents,
  lineHeightByPercentage,
  fluidSizing,
  fontWeight,
} from '.';
import { TTypographyProps } from './typings';

const lineHeight = lineHeightByPercentage();

const typographyStyles = {
  H1: {
    fontSize: fluidSizing(48, 96, 300, 1200),
    fontWeight: fontWeight.bold,
    margin: '0 0 0.25em',
    lineHeight: lineHeightByPercentage(115),
    as: 'h1',
  },

  H2: {
    fontSize: [37, 39, 41, 43],
    fontWeight: fontWeight.bold,
    lineHeight,
    marginTop: 0,
    as: 'h2',
  },

  H3: {
    fontSize: [27, 28, 30, 32],
    fontWeight: fontWeight.bold,
    lineHeight,
    as: 'h3',
  },

  H4: {
    fontSize: [18, 20, 22, 24],
    fontWeight: fontWeight.bold,
    lineHeight,
    marginTop: 0,
    as: 'h4',
  },

  H5: {
    fontWeight: fontWeight.bold,
    fontSize: [16, 17, 19, 21],
    lineHeight,
    marginTop: 0,
    as: 'h5',
  },

  H6: {
    fontWeight: fontWeight.bold,
    fontSize: [16, 17, 19, 21],
    lineHeight,
    marginTop: 0,
    as: 'h6',
  },

  LargeLead: {
    fontWeight: fontWeight.semiBold,
    fontSize: [18, 20, 22, 24],
    marginTop: 0,
    as: 'p',
  },

  SmallLead: {
    fontWeight: fontWeight.semiBold,
    fontSize: [17, 18, 19, 21],
    lineHeight,
    as: 'p',
  },

  Paragraph: {
    fontSize: [16, 20],
    fontWeight: 300,
    lineHeight,
    marginTop: 0,
    as: 'p',
  },

  SmallParagraph: {
    fontSize: [12, 14],
    fontWeight: fontWeight.regular,
    lineHeight,
    marginTop: 0,
    as: 'p',
  },
};

type TypeComponentKeys = keyof typeof typographyStyles;

type TypeProps = {
  [key in TypeComponentKeys]: React.FC<TTypographyProps>;
};

const {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  LargeLead,
  SmallLead,
  Paragraph,
  SmallParagraph,
} = createTypographyComponents<typeof typographyStyles, TypeProps>(
  typographyStyles
);

export const Type = () => {
  return (
    <>
      <H1>Example h1</H1>
      <H2>Example h2</H2>
      <H3>Example h2</H3>
      <H4>Example h2</H4>
      <H5>Example h2</H5>
      <H6>Example h2</H6>
      <LargeLead>Large Lead</LargeLead>
      <SmallLead>Small Lead</SmallLead>
      <Paragraph>Paragraph</Paragraph>
      <SmallParagraph>Small Paragraph</SmallParagraph>
    </>
  );
};

export default {
  title: 'Typography',
  component: Type,
};