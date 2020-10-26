import React from 'react';
import { createTypographyComponents, fluidSizing } from './src';

const typographyStyles = {
  H1: {
    fontSize: fluidSizing(48, 96, 300, 1200),
    margin: '0 0 0.25em',
    lineHeight: 1.5,
    as: 'h1'
  },

  H2: {
    fontSize: [37, 39, 41, 43],
    lineHeight: 1.5,
    marginTop: 0,
    as: 'h2'
  },

  H3: {
    fontSize: [27, 28, 30, 32],
    lineHeight: 1.5,
    as: 'h3'
  },

  H4: {
    fontSize: [18, 20, 22, 24],
    lineHeight: 1.5,
    marginTop: 0,
    as: 'h4'
  },

  H5: {
    fontSize: [16, 17, 19, 21],
    lineHeight: 1.5,
    marginTop: 0,
    as: 'h5'
  },

  H6: {
    fontSize: [16, 17, 19, 21],
    lineHeight: 1.5,
    marginTop: 0,
    as: 'h6'
  },

  LargeLead: {
    fontSize: [18, 20, 22, 24],
    marginTop: 0,
    as: 'p'
  },

  SmallLead: {
    fontSize: [17, 18, 19, 21],
    lineHeight: 1.5,
    as: 'p'
  },

  Paragraph: {
    fontSize: [16, 20],
    fontWeight: 300,
    lineHeight: 1.5,
    marginTop: 0,
    as: 'p'
  },

  SmallParagraph: {
    fontSize: [12, 14],
    lineHeight: 1.5,
    marginTop: 0,
    as: 'p'
  }
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
  SmallParagraph
} = createTypographyComponents<typeof typographyStyles>(typographyStyles);

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
  component: Type
};
