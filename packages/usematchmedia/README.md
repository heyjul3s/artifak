# `@artifak/usematchmedia`

A React hook that allows you to perform media queries within your React component.

## Installation

### Yarn

```sh
yarn add @artifak/usematchmedia
```

### NPM

```sh
npm install @artifak/usematchmedia
```

## Usage

```ts
import { useMatchMedia } from 'artifak';
import { ExampleMobile } from './ExampleMobile';
import { ExampleDesktop } from './ExampleDesktop';

export function Nav() {
  const matchedMobile = useMatchMedia('(hover: none)');

  return (
    <>
      {matchedMobile && <ExampleMobile />}
      {!matchedMobile && <ExampleDesktop />}
    </>
  );
}
```
