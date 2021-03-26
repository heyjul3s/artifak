# `@artifak/fluidsizing`

A utility function that computes a fluid sizing value based on the min and max values provided, eliminating the need for specifying width based media queries. Alternatively, docs can be found at [Artifak Fluid Sizing](https://www.artifak.dev/?content=Typography).

## Installation

### Yarn

```sh
yarn add @artifak/fluidsizing
```

### NPM

```sh
npm install @artifak/fluidsizing
```

## Usage

Below are the parameters and the following an example of usage.

| Arguments        | Type                  |
| ---------------- | --------------------- |
| minElementSize   | number                |
| maxElementSize   | number                |
| minViewportWidth | number                |
| maxViewportWidth | number                |
| unit             | 'em' \| 'px' \| 'rem' |

```ts
import { fluidSizing } from '@artifak/fluidsizing';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${fluidSizing(16, 96, 300, 1200, 'px')};
  line-height: ${fluidSizing(1.4, 1.6, 300, 1200, 'rem')};
  padding-bottom: ${fluidSizing(10, 15, 300, 1200, 'px')};
`;
```
