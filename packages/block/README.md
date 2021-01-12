# `@artifak/block` (Deprecated from v2.0.0)

Block is a basic block component that acts as a base to your UI components. You can also view the docs
at [Artifak Block](https://www.artifak.dev/?content=Block).

## Installation

### Yarn

```sh
yarn add @artifak/block
```

### NPM

```sh
npm install @artifak/block
```

## Usage

Below is an example of how you may use it.

```ts
import { createBlockComponents } from '@artifak';

const blockStyles = {
  Article: {
    margin: 0,
    padding: [15, 30]
    as: 'article',
  },
};

const { Article } = createBlockComponents<typeof blockStyles>(blockStyles);
```
