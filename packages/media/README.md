# `@artifak/media`

Although Artifak helps you to write less media queries, there are also many other types of media queries available now which focuses more on querying devices and accessibilty. The Artifak Media library essentially helps with that and is a styled-component mixin to help you write media queries for your styled-components. _Note that the CSS media query operator **"not"** is not supported for the time being._ Docs are also available at [Artifak Media](https://www.artifak.dev/?content=media).

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

Simply import **media** and the media query rule that you desire to use and include it in your styled component.

At its most basic usage, you can specify for example a min-width rule like so:

```ts
import { media } from '@artifak/media';

const MyArticle = styled.article`
  ${media({ width: '>= 30em' })`
    background: orange;
  `}
`;
```

#### Querying Media With "And"

For concatenation using the **"and"** keyword, below is a simple rule that would equate to **"@media screen and (min-width: 30em)"**. Basically, just append the rules to the query object to execute a media query with **"and"** keywords.

```ts
import { media, screen } from '@artifak/media';

const MyArticle = styled.article`
  ${media({ screen, width: '>= 30em' })`
    background: orange;
  `}
`;
```

#### Querying Media With "Or"

For **"or"** statements, simply provide another query object as argument. Below will equate to: **"@media screen and (min-width: 30em), (orientation: landscape)"**.

```ts
import { media, screen, landscape } from '@artifak/media';

const MyArticle = styled.article`
  ${media({ screen, width: '>= 30em' }, { landscape })`
    background: orange;
  `}
`;
```

#### Querying Media With Min, Max or Single Value

Keys to queries that offer min/max values are

- width
- height
- ratio (which is for **aspect-ratio**)
- res (which is for **resolution**)

For min values, use the **">="** operator.

```ts
import { media, screen } from '@artifak/media';

const MyArticle = styled.article`
  ${media({ screen, width: '>= 30em' })`
    background: orange;
  `}
`;
```

For max values, use the **"<="** operator.

```ts
import { media, screen } from '@artifak/media';

const MyArticle = styled.article`
  ${media({ screen, width: '<= 30em' })`
    background: orange;
  `}
`;
```

For both **min** and **max** values as per below, is an example for min and max widths.

```ts
import { media, screen } from '@artifak/media';

const MyArticle = styled.article`
  ${media({ screen, width: '30em >= width <= 50em' })`
    background: orange;
  `}
`;
```

If for some reason you only want a single value for these properties, it can be applied like so.

```ts
import { media, screen } from '@artifak/media';

const MyArticle = styled.article`
  ${media({
    screen,
    width: '30em',
    height: '50em',
    ratio: '1/3',
    res: '72dpi'
  })`
    background: orange;
  `}
`;
```

## Media Queries

Apart from the common **width, height, aspect-ratio and resolution** queries, below are a list of currently available media queries. Due to some newer queries not having sufficient browser support, they are omitted from the library for the time being.

### Available Queries

| Property Name     | Value                                 |
| ----------------- | ------------------------------------- |
| all               | all                                   |
| screen            | screen                                |
| onlyScreen        | only screen                           |
| print             | print                                 |
| onlyPrint         | only print                            |
| speech            | speech                                |
| onlySpeech        | only speech                           |
| hover             | hover: hover                          |
| hoverNone         | hover: none                           |
| anyHover          | any-hover: hover                      |
| anyHoverNone      | any-hover: none                       |
| pointer           | pointer: pointer                      |
| pointerNone       | pointer: none                         |
| anyPointer        | any-pointer: pointer                  |
| anyPointerNone    | any-pointer: none                     |
| displayFullScreen | display-mode: fullscreen              |
| displayMinUI      | display-mode: minimal-ui              |
| displayStandalone | display-mode: standalone              |
| displayBrowser    | display-mode: browser                 |
| portrait          | orientation: portrait                 |
| landscape         | orientation: landscape                |
| darkColorScheme   | prefers-color-scheme: dark            |
| lightColorScheme  | prefers-color-scheme: light           |
| reducedMotion     | prefers-reduced-motion: reduce        |
| reducedMotionAny  | prefers-reduced-motion: no-preference |
