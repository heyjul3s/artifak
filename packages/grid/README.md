# `@artifak/grid`

@artifak/grid is a component for quickly setting grid columns. Apart from that, the usual CSS grid styles can also be applied to your liking. You can also view the docs at [Artifak Grid](https://www.artifak.dev/?content=Grid).

## Installation

### Yarn

```sh
yarn add @artifak/grid
```

### NPM

```sh
npm install @artifak/grid
```

## Usage

There are two properties here that you can set which are `columnWidth` and `columnLength`.

### Column Width

This defines the sizing for the column based on the width that you provide.

```ts
import { Grid, GridItem } from '@artifak/grid';

type Props = {
  images: string[]
}

const ImageGallery: React.FC<Props> = ({ images }) => {
  return (
    <Grid columnWidth="320px">
      {image.map((image, i) => {
        return (
          <GridItem key={i}><img src={image} /></GridItem>
        )

      })}
    </GridItem>
  )
}

```

### Column Length

This defines the number of columns to distribute your grid contents into.

```ts

import { Grid, GridItem } from '@artifak/grid';

type Props = {
  images: string[]
}

const ImageGallery: React.FC<Props> = ({ images }) => {
  return (
    <Grid columnLength={4}>
      {image.map((image, i) => {
        return (
          <GridItem key={i}><img src={image} /></GridItem>
        )

      })}
    </GridItem>
  )
}

```
