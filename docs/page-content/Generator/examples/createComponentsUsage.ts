export const createComponentsUsage = `
  import { position, PositionProps } from 'styled-system';
  import { createComponents } from 'artifak';
  import { theme } from './theme';

  // # EXAMPLE 1 - USING A CONFIGURATION OBJECT AS BASE
  // Note that this is just an example, please use the
  // "button" HTML element whenever possible. In the
  // examples, we will see full usage of the
  // createComponents function.

  const base = {
    styles: {
      display: 'block',
      padding: ['1em', '1.5em 1em'],
      width: '100%',
      fontSize: ['1rem', '1.2rem']
    },
    styleProps: [position],
    attrs: { role: 'button' },
    element: 'div'
  };

  // Define your component styles
  const config = {
    TextButton: {
      background: transparent,
      border: 'none',
      '&:hover': {
        color: theme.colors.primary
      },
      attrs: { name: 'text-button' },
      as: 'span'
    },

    FilledButton: {
      margin: '0 auto',
      padding: ['1.2em 1em', '1.5em 1.2em'],
      background: theme.colors.primary
      '&:hover': {
        background: theme.colors.secondary
      },
      attrs: { name: 'filled-button' }
    },

    OutlinedButton: {
      background: transparent,
      border: 1px solid black,
      padding: 0,
      '&:hover': {
        borderColor: theme.colors.primary
      },
      attrs: { name: 'outlined-button' }
    }
  };

  // Invoke and destructure for usage. Since a configuration object
  // is provided, you will also get the base as a component.
  // You can rename it as use as a base for something else if desired.
  export const {
    Base: ButtonBase,
    FilledButton,
    OutlinedButton,
    TextButton
  } = createComponents<typeof config, typeof theme>(BaseComponent, config);


  // # EXAMPLE 2 - USING A COMPONENT AS BASE
  // You can also pass in a component to use as base.
  // For example, let us create a BasicButton component.

  const BasicButton = styled('div')(
    {
      display: 'block',
      padding: ['1em', '1.5em 1em'],
      width: '100%',
      fontSize: ['1rem', '1.2rem']
    }
  );

  // Invoke and call like Example 1. Here we will reuse the
  // config constant we previously defined in Example 1.
  // Note that passing a component as base will not yield
  // a Base component in the results.
  export const {
    FilledButton,
    OutlinedButton,
    TextButton
  } = createComponents<typeof config, typeof theme>(BasicButton, config);
`;
