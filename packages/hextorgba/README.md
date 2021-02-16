# `@artifak/hextorgba`

A utility function to convert hexadecimal colour values to RGBA string.

## Installation

### Yarn

```sh
yarn add @artifak/hextorgb
```

### NPM

```sh
npm install @artifak/hextorgb
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
