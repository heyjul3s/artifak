export const createBaseComponentsUsage = `
  import { position, PositionProps } from 'styled-system';
  import { createStyledComponent, createBaseComponents } from 'artifak';

  // Create your base component
  const BaseComponent = createStyledComponent<PositionProps>({
    styles: { position: 'relative' }
    styleProps: [position]
  });

  // Define your styles
  const config = {
    Container: {
      styles: {
        margin: 0 auto,
        padding: ['1em', '1.5em 1em'],
        width: '100%',
        maxWidth: ['320px', '768px', '996px', '1200px']
      },
      attrs: {
        role: 'region'
      }
    },

    UnpaddedContainer: {
      styles: {
        padding: 0
      },
      attrs: {
        role: 'region'
      }
    },

    FlexContainer: {
      styles: {
        display: 'flex',
        padding: ['1em', '1.5em 1em'],
      }
      attrs: {
        role: 'region'
      }
    }
  };

  // And put it all here
  export const {
    Container,
    UnpaddedContainer,
    FlexContainer
  } = createBaseComponents<typeof config>(BaseComponent, config);
`;
