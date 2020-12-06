import React from 'react';
import styled from 'styled-components';
import { variant, system } from 'styled-system';
import { createStyledComponent, createBaseComponents } from './src';

const typoConfig = {
  H1: {
    styles: {
      fontSize: [48, 96],
      margin: '0 0 0.25em',
      lineHeight: 1.5,
      as: 'h1'
    }
  },

  H2: {
    styles: {
      fontSize: [37, 39, 41, 43],
      lineHeight: 1.5,
      marginTop: 0,
      as: 'h2'
    },
    attrs: {
      tabIndex: 1
    }
  },

  H3: {
    styles: {
      fontSize: [27, 28, 30, 32],
      lineHeight: 1.5,
      as: 'h3'
    }
  }
};

const typographyStyleProps = system({
  textDecoration: true,
  textIndent: true,
  textTransform: true,
  textOverflow: true,
  whiteSpace: true,
  wordBreak: true,
  wordSpacing: true
});

const TypographyBase = createStyledComponent<typeof typographyStyleProps>({
  styleProps: [typographyStyleProps]
});

const { H1 } = createBaseComponents<typeof typoConfig, any, HTMLHeadElement>(
  TypographyBase,
  typoConfig
);

const VariantH1 = styled(H1)(
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

export function GenVariadicH1() {
  return (
    <>
      <VariantH1>Hello World</VariantH1>
      <VariantH1 variant="primary">Hello World</VariantH1>
      <VariantH1 variant="secondary">Hello World</VariantH1>
    </>
  );
}

const H1withVarsAttrs = createStyledComponent({
  styles: {
    fontSize: '48px',
    margin: '0 0 0.25em',
    lineHeight: 1.5
  },
  attrs: () => ({
    title: 'heading'
  }),
  variants: {
    primary: {
      color: 'red'
    },
    secondary: {
      color: 'hotpink'
    }
  },
  element: 'h1'
});

export function H1WithVariantsAttributes() {
  return (
    <>
      <H1withVarsAttrs>Hello World</H1withVarsAttrs>
      <H1withVarsAttrs variant="primary">Hello World</H1withVarsAttrs>
      <H1withVarsAttrs variant="secondary">Hello World</H1withVarsAttrs>
    </>
  );
}

const shorthandConfig = {
  ShortHandH1: {
    fontSize: '48px',
    margin: '0 0 0.25em',
    lineHeight: 1.5
  }
};

const { ShortHandH1 } = createBaseComponents<
  typeof shorthandConfig,
  any,
  HTMLHeadElement
>(TypographyBase, shorthandConfig);

export function Shorthand() {
  return (
    <>
      <ShortHandH1>Hello World</ShortHandH1>
    </>
  );
}

export default {
  title: 'Generator'
};
