# `@artifak/container`

A basic container component. By default has full 100% width and margin 0 auto. All you need to do is specify your max widths.

## Usage

Apart from widths, the component also accepts the following style properties:

- background
- border
- color
- display
- layout
- position
- shadow
- space
- typography

Below is a usage example.

```ts
import { Container } from 'artifak';

export function Example() {
  return (
    <Container maxWidth={['40em', '52em', '64em', '80em']}>
      <>
        <p>Hello World</p>
      </>
    </Container>
  );
}
```
