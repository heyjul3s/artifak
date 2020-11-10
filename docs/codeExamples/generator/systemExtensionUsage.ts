export const systemExtensionUsage = `
  import { system } from 'styled-system';
  import { createStyledComponent, createBaseComponents } from 'artifak';
  import { Theme, RequiredTheme, ResponsiveValue } from 'styled-system';

  // As Styled System is 100% in JS, types are lacking
  // so create your interfaces.
  // You will find most of what you need via @types/styled-system but if you don't
  // well... here's an example of making your own.
  export interface TextDecorationProps<ThemeType extends Theme = RequiredTheme> {
    textDecoration?: ResponsiveValue<CSS.Property.TextDecoration, ThemeType>;
  }

  // add your prop via "system"
  // for more on how "system" works: https://styled-system.com/custom-props/
  const myStylesConfig = system({
    textDecoration: true
  });

  // Create the styled component.
  // In this example, we're assuming we want to generate a bunch of components from this base.
  const MyBaseComponent = createStyledComponent<TextDecorationProps>([myStylesConfig]);

  const myStyles = {
    Component1: {
      marginTop: '15px',
      as: 'anchor'
    },

    Component2: {
      marginTop: '30px',
      as: 'h1'
    },

    Component3: {
      marginTop: '40px',
      as: 'p'
    }
  }

  export {
    Component1,
    Component2,
    Component3
  } = createBaseComponents<typeof myStyles>(myStyles);
`;
