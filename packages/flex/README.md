# `@artifak/flex`

A flexbox version of @artifak/flex. You can also view the docs at [Artifak Flex](https://www.artifak.dev/?content=Flex).

## Installation

### Yarn

```sh
yarn add @artifak/flex
```

### NPM

```sh
npm install @artifak/flex
```

## Usage

Below is an example of how you may use it.

```ts
import { FlexRow, FlexCol } from '@artifak/flex';

export const Blog = () => {
  return (
    <FlexRow>
      <FlexCol columnSize={[12, 6, 4]}>Column 1<FlexCol>
      <FlexCol columnSize={[12, 6, 4]}>Column 2<FlexCol>
      <FlexCol columnSize={[12, 6, 4]}>Column 3<FlexCol>
    </FlexRow>
  );
};
```
