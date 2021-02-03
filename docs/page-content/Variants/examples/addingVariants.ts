export const addingVariantsStyledComponents = `
  // Let's say we've generated a bunch of components in "./src/typography"
  // For this example, we'll pretend we've generated an H1 component
  // and we need variants for this H1 component
  import { H1 } from './src/typography';

  const color = theme.variants("mode", "variant", {
    default: { light: "gray", dark: "darkgray" },
    primary: { light: "blue", dark: "darkblue" },
    success: { light: "green", dark: "darkgreen" },
    warning: { light: "orange", dark: "darkorange" },
  });

  const Heading = styled(H1)\`
    color: \${color};
  \`;

  // In another file, we may use it with variants
  // For example...
  import { Heading } from 'path/to/heading';

  export function Header() {
    return (
      <>
        <Heading variant="primary">Hello!</Heading>
        <Heading variant="secondary">Goodbye!</Heading>
      </>
    );
  }
`;

export const addingVariantsStyledSystem = `
  // Let's say we've generated a bunch of components in "./src/typography"
  // For this example, we'll pretend we've generated an H1 component
  // and we need variants for this H1 component
  import { H1 } from './src/typography';

  // Styled System has a variant util function to add variants to a Styled Component
  import { variants } from 'styled-system';

  // We may add the variant like so...
  export const Heading = styled(H1)(
    variants({
      variants: {
        primary: {
          color: 'red'
        },

        secondary: {
          color: 'purple'
        }
      }
    })
  );

  // In another file, we may use it with variants
  // For example...
  import { Heading } from 'path/to/heading';

  export function Header() {
    return (
      <>
        <Heading variant="primary">Hello!</Heading>
        <Heading variant="secondary">Goodbye!</Heading>
      </>
    );
  }
`;
