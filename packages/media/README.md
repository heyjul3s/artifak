# `@artifak/media`

Although Artifak helps you to write less media queries, there are also many other types of media queries available now which focuses more on querying devices and accessibilty. The Artifak Media library essentially helps with that and is a styled-component mixin to help you write media queries for your styled-components. Docs are also available at [Artifak Media](https://www.artifak.dev/?content=media).

## Installation

### Yarn

```sh
yarn add @artifak/media
```

### NPM

```sh
npm install @artifak/media
```

## Usage

### media

Simply import **media** and the media query rule that you desire to use and include it in your styled component. Below is a simple rule that would equate to **@media screen and (min-width: 30em)**

```ts
import { media, screen } from '@artifak/media';

const MyArticle = styled.article`
  ${media({ screen, width: '>= 30em' })`
    background: orange;
  `}
`;
```

You can also specify min and max widths like so:

```ts
import { media, screen } from '@artifak/media';

const MyArticle = styled.article`
  ${media({ screen, width: '30em >= width <= 50em' })`
    background: orange;
  `}
`;
```

Here is another example with other queries you can include:

```ts
import { media, all, landscape, displayFullScreen } from '@artifak/media';

const MyArticle = styled.article`
  ${media({ all, landscape, displayFullScreen })`
    background: orange;
  `}
`;
```

The above will equate to: **@media all and (orientation: landscape) and (display-mode: fullscreen)**

### Available Media Queries

Below are a list of currently available media queries

Due to some newer queries that do not have sufficient browser support, they are omitted from the library for the time being. These are:
