# `@artifak/pxtoem`

A utility function to convert px values to em.

## Installation

### Yarn

```sh
yarn add @artifak/pxtoem
```

### NPM

```sh
npm install @artifak/pxtoem
```

## Usage

```ts
import { pxToEm } from 'artifak';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  background: #000;
  padding-left: ${pxToEm('16px')};
  padding-right: ${pxToEm('16px')};
`;
```
