# `@artifak/useclickaway`

A React hook to trigger a callback when a click event occurs on a target that is not the specified ref HTML element.

## Usage

```ts
import React from 'react';
import { useClickAway } from '@artifak/useclickaway;

const Dummy = () => {
    const ref: React.RefObject<HTMLDivElement> = React.createRef();

    const onClickAway = () => {
      console.log('Clicked');
    };

    useClickAway(ref, onClickAway);

    return (
      <div>
        Wrapper
        <div ref={ref}>
          Click Me
        </div>
      </div>
    );
  };
```
