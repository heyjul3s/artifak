# `@artifak/imagery`

Imagery comprises of 2 basic components you can use which are the Imagery and ImageryBase components. The docs are also available at [Artifak Grid](https://www.artifak.dev/?content=Imagery).

## Installation

### Yarn

```sh
yarn add @artifak/imagery
```

### NPM

```sh
npm install @artifak/imagery
```

## Usage

### ImageryBase

ImageryBase is a basic raw component loaded with styled-components properties.

```ts
import { ImageryBase } from '@artifak/imagery';

export function Img({ src }) {
  return <Imagery src={src} display={'block'} width={'100%'} height={'auto'} />;
}
```

### Imagery

Imagery will include basic styles and srcset and sizes attribute checks before applying them. Simply import to use and pass whatever props you may need.

```ts
import { Imagery } from '@artifak/imagery';

export function Img({ src, fit = 'contain', position = 'center' }) {
  return <Imagery src={src} objectFit={fit} objectPosition={position} />;
}
```
