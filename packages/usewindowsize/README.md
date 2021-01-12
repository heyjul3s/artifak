# `@artifak/usewindowsize`

A React hook that allows you to get the window dimensions within your React component. Returns an object consisting of properties: innerWidth, innerHeight, outerWidth and outerHeight.

## Installation

### Yarn

```sh
yarn add @artifak/usewindowsize
```

### NPM

```sh
npm install @artifak/usewindowsize
```

## Usage

```ts
import { useWindowSize } from 'artifak';
import { ExampleMobile } from './ExampleMobile';
import { ExampleDesktop } from './ExampleDesktop';

export function Nav() {
  const windowSize = useWindowSize();

  return (
    <>
      {windowSize.innerWidth < 1000 && <ExampleMobile />}
      <ExampleDesktop />
    </>
  );
}
```
