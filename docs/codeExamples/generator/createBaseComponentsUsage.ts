export const createBaseComponentsUsage = `
  import { position, PositionProps } from 'styled-system';
  import { createStyledComponent, createBaseComponents } from 'artifak';

  // Create your base component
  const BaseComponent = createStyledComponent<PositionProps>(
    { position: 'relative' }, {}, [position], 'article'
  );

  // Define your styles
  const styles = {
    Article1: {
      margin: 0,
    },

    Article2: {
      margin: 15px
    },

    Article3: {
      margin: 15px
    }
  };

  // And put it all here
  export const {
    Article1,
    Article2,
    Article3
  } = createBaseComponents<typeof styles>(BaseComponent, styles);
`;
