export const createBaseComponentsUsage = `
  import { position, PositionProps } from 'styled-system';
  import { createStyledComponent, createBaseComponents } from 'artifak';

  const StyledArticle = createStyledComponent<PositionProps>([position], { position: 'relative' }, 'article');

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

  const { Article1, Article2, Article3 } = createBaseComponents<typeof styles>(styles);
`;
