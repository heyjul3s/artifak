# `@artifak/component-generator`

Component Generator library to generate similar components based off of styles and or attributes you provide. You can also view the docs
at [Artifak Typography](https://www.artifak.dev/?content=Generator).

## Installation

### Yarn

```sh
yarn add @artifak/component-generator
```

### NPM

```sh
npm install @artifak/component-generator
```

## Usage

### createStyledComponent

To generate your components, simply define a config object consisting of styles/attributes with the key as your component name. Note that you **must** define the `as` property in order to have it render as the HTML tag that you desire. In the example below, we've defined a component called `H1` to render as an `h1` HTML tag. We've also defined the fontSize in an array that matches the media query widths.

| Arguments | Type   |
| --------- | ------ |
| config    | object |

```ts
import { createStyledComponent } from '@artifak/component-generator';
import { system } from 'styled-system';

const styles = {
  fontSize: [16, 36, 96],
  margin: 0,
  as: 'h1'
};

const variants = {
  primary: {
    color: 'red'
  },
  secondary: {
    color: 'blue'
  }
};

const styleProps = [
  system({
    textTransform: true
  })
];

const element = 'h1';

const H1 = createStyledComponent<typeof config>({
  styles,
  variants,
  styleProps,
  element
});
```

### createBaseComponents

createBaseComponents will require a base Styled Component to generate your desired components. This is used to conveniently generate similar components. For creating the base component, you can use createStyledComponent.

| Arguments | Type   |
| --------- | ------ |
| styles    | object |

```ts
import {
  createStyledComponent,
  createBaseComponents
} from '@artifak/component-generator';

const baseComponentConfig = {
  styles: {
    display: 'block',
    margin: '0 auto'
  }
};

const BaseComponent = createStyledComponent<typeof baseComponentConfig>();

const typeSettings = {
  H1: {
    styles: {
      fontSize: [16, 17, 19, 21],
      lineHeight: 1.5,
      marginTop: 0,
      as: 'h1'
    }
  }
};

const { H1 } = createBaseComponents<typeof typeSettings>(typeSettings);
```
