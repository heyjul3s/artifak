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

To generate your typography components, simply define a styles object with the key as your component name. Note that you **must** define the `as` property in order to have it render as the HTML tag that you desire. In the example below, we've defined a component called `H1` to render as an `h1` HTML tag. We've also defined the fontSize in an array that matches the media query widths.

| Arguments | Type   |
| --------- | ------ |
| styles    | object |

```ts
import { createTypography } from '@artifak/typography';

const typeStyles = {
  H1: {
    fontSize: [16, 36, 96],
    margin: 0,
    as: 'h1'
  }
};

const { H1 } = createTypography<typeof typeStyles>(typeStyles);
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
