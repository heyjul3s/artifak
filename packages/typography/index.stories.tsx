import React from 'react';
import { createTypography } from './src';
import styled from 'styled-components';
import { variant } from 'styled-system';

const base = {
  styles: {
    lineHeight: 1.5
  }
};

const components = {
  H1: {
    fontSize: [48, 96],
    margin: '0 0 0.25em',
    as: 'h1' as keyof JSX.IntrinsicElements
  },

  H2: {
    fontSize: [37, 39, 41, 43],
    marginTop: 0,
    as: 'h2' as keyof JSX.IntrinsicElements
  },

  H3: {
    fontSize: [27, 28, 30, 32],
    as: 'h3' as keyof JSX.IntrinsicElements
  },

  H4: {
    fontSize: [18, 20, 22, 24],
    marginTop: 0,
    as: 'h4' as keyof JSX.IntrinsicElements
  },

  H5: {
    fontSize: [16, 17, 19, 21],
    marginTop: 0,
    as: 'h5' as keyof JSX.IntrinsicElements
  },

  H6: {
    fontSize: [16, 17, 19, 21],
    marginTop: 0,
    as: 'h6' as keyof JSX.IntrinsicElements
  },

  LargeLead: {
    fontSize: [18, 20, 22, 24],
    marginTop: 0,
    as: 'p' as keyof JSX.IntrinsicElements
  },

  SmallLead: {
    fontSize: [17, 18, 19, 21],
    as: 'p' as keyof JSX.IntrinsicElements
  },

  Paragraph: {
    fontSize: [16, 20],
    fontWeight: 300,
    marginTop: 0,
    as: 'p' as keyof JSX.IntrinsicElements
  },

  SmallParagraph: {
    fontSize: [12, 14],
    marginTop: 0,
    as: 'p' as keyof JSX.IntrinsicElements
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
} = createTypography<typeof components>(base, components);

const SysH1 = styled(H1)(
  variant({
    variants: {
      primary: {
        color: 'red'
      },
      secondary: {
        color: 'hotpink'
      }
    }
  })
);

export const Type = () => {
  return (
    <>
      <SysH1 variant="primary">Hello World</SysH1>
      <SysH1 variant="secondary">Hello World</SysH1>
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
  title: 'Typography'
};
