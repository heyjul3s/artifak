# `@artifak/useprevious`

A React hook to get previous state value.

## Installation

### Yarn

```sh
yarn add @artifak/useprevious
```

### NPM

```sh
npm install @artifak/useprevious
```

## Usage

```ts
import React from 'react';
import { usePrevious } from 'artifak';

export function Nav() {
  const [count, setCount] = React.useState(0);
  const previousCount = usePrevious(count);

  return (
    <>
      <div>Current {count}</div>
      <div>
        Previous
        {previousCount}
      </div>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </>
  );
}
```
