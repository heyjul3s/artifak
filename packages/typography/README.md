# `@artifak/typography`

The main purpose of the Artifak typography is to help your generate typography components according to your needs. You can also view the docs
at [Artifak Typography](https://www.artifak.dev/?content=Typography).

## Installation

### Yarn

```sh
yarn add @artifak/typography
```

### NPM

```sh
npm install @artifak/typography
```

## Usage

### createTypography

Generates your typography components.

```ts
import { createTypographyComponents, fontWeight } from 'artifak';
import { theme } from '../theme';

const base = {
  styles: {
    color: theme.colors.text,
    fontFamily: theme.fontFamily.arial
  }
};

const components = {
  H1: {
    fontSize: [48, 96],
    margin: '0 0 0.25em',
    lineHeight: 1.15,
    as: 'h1'
  },

  H2: {
    fontSize: [37, 39, 41, 43],
    lineHeight: 1.45,
    as: 'h2'
  },

  H3: {
    fontSize: [27, 28, 30, 32],
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
    as: 'h6'
  }
};

export const { H1, H2, H3, H4, H5, H6 } = createTypography<
  typeof components,
  typeof theme
>(base, components);
```

Other than helping you generate new typography components, it also contains other utility functions as well to help you in styling.

### fontWeight

A constant of font weights for use. An example usage is as per below:

```ts
import { fontWeight } from 'artifak';
import styled from 'styled-components';

export const theme = styled.p`
  font-size: 16px;
  font-weight: ${fontWeight.BOLD};
`;
```
