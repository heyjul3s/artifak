# `@artifak/pxtorem`

A utility function to convert px values to rem.

## Installation

### Yarn

```sh
yarn add @artifak/pxtorem
```

### NPM

```sh
npm install @artifak/pxtorem
```

## Usage

```ts
import { pxToRem } from 'artifak';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  background: #000;
  font-size: ${pxToRem('48px')};
`;
```
