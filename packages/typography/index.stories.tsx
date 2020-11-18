import React from 'react';
import { createTypographyComponents, fluidSizing } from './src';
import { createStyledComponent } from '@artifak/component-generator';
import styled from 'styled-components';
import { variant } from 'styled-system';

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

const VariableH1 = createStyledComponent({
  styles: {
    fontSize: fluidSizing(48, 96, 300, 1200),
    margin: '0 0 0.25em',
    lineHeight: 1.5,
    as: 'h1'
  },
  variants: {
    primary: {
      color: 'red'
    },
    secondary: {
      color: 'hotpink'
    }
  }
});

export const TypeVariant = () => {
  return (
    <>
      <VariableH1 variant="primary">Hello World</VariableH1>
      <VariableH1 variant="secondary">Hello World</VariableH1>
    </>
  );
};

export default {
  title: 'Typography',
  component: [Type, TypeVariant]
};
