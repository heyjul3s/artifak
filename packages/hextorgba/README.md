# `@artifak/hextorgba`

A utility function to convert hexadecimal colour values to RGBA string.

## Installation

### Yarn

```sh
yarn add @artifak/hextorgba
```

### NPM

```sh
npm install @artifak/hextorgba
```

## Usage

```ts
import { hexToRGBA } from 'artifak';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  background: #000;
  color: ${hexToRGBA('#FFF', 0.75)};
`;
```
