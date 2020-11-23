import React from 'react';
import styled, { css } from 'styled-components';
import { variant, system } from 'styled-system';
import { createStyledComponent, createBaseComponents } from './src';

const StyledH1 = createStyledComponent({
  styles: {
    fontSize: '48px',
    margin: '0 0 0.25em',
    lineHeight: 1.5
  },
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

export function StyledH1Componennt() {
  return (
    <>
      <StyledH1>Hello World</StyledH1>
      <StyledH1 variant="primary">Hello World</StyledH1>
      <StyledH1 variant="secondary">Hello World</StyledH1>
    </>
  );
}

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

export const { H1 } = createBaseComponents<
  typeof typoConfig,
  any,
  HTMLHeadElement
>(TypographyBase, typoConfig);

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

export default {
  title: 'Generator',
  component: [StyledH1Componennt]
};
