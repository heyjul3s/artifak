export const generateWithVariants = `
  import { createStyledComponent, createBaseComponents } from 'artifak';
  import { position, PositionProps } from 'styled-system';

  // if you have default styles you can declare like so:
  const baseStyles = {
    display: 'block',
    width: '100%',
    minHeight: '400px'
  };

  // Usually you will have them declared in your theme, but as a short example...
  const variants = {
    variants: {
      primary: {
        color: 'red';
      },
      secondary: {
        color: 'blue';
      }
    }
  };

  // From here, you can use createStyledComponent to create your
  // base styled component with the variants you want.
  // "[position]" is a CSS property from styled-system and is included
  // here to demonstrate adding custom CSS properties.
  // Note that the last argument is optional and defaults to a "DIV" element
  const baseBackground = createStyledComponent<PositionProps>(baseStyles, variants, [position], 'div');
`;
