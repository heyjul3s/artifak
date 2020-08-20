# Artifak

Artifak is a React UI primitive components library to help you scaffold component system in your React project.

Features

- [x] Block
- [x] Grid
- [x] Typography
- [ ] Flexbox
- [ ] Image
- [ ] Forms

## Installation

For the whole Artifak lot, you can install it via...

Yarn

```sh
yarn add artifak
```

NPM

```sh
npm install artifak
```

Packages can also be installed independently. Simply do `yarn add <package name>` or `npm install <package name>` to add them to your list of dependencies. Below is a list of available packages.

- @artifak/grid
- @artifak/typography
- @artifak/block

## Usage

### Block

Block is a basic block component that is meant for setting margin, padding sizings to your component.

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

### Grid

Grid is a component for quickly setting grid columns. Apart from that, the usual CSS grid styles can also be applied to your liking. There are two properties here that you can set which are `columnWidth` and `columnLength`.

### Column Width

This defines the sizing for the column based on the width that you provide.

```ts
import { Grid, GridItem } from 'artifak';

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

import { Grid, GridItem } from 'artifak';

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

### Typography

The main purpose of the Artifak typography is to help your generate typography components according to your needs. This is done via `createTypographyComponents` utility function. Simply define a styles object with the key as your component name. Note that you **must** define the `as` property in order to have it render as the HTML tag that you desire. In the example below, we've defined a component called `H1` to render as an `h1` HTML tag. We've also defined the fontSize in an array that matches the media query widths.

```ts
import { createTypographyComponents } from '@artifak';

const typeStyles = {
  H1: {
    fontSize: [16, 36, 96],
    margin: 0,
    as: 'h1',
  },
};

const { H1 } = createTypographyComponents<typeof typeStyles>(typeStyles);
```

Other than helping you generate new typography components, it also contains other utility functions as well to help you in styling.

### fluidSizing

This utility function calculates the sizing value dynamically within the passed in min/max constraints without need for media queries.

```ts
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: fluidSizing(16, 96, 300, 1200);
  line-height: fluidSizing(1.4, 1.6, 300, 1200);
`;
```
