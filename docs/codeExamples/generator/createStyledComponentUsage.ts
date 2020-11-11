export const createStyledComponentUsage = `
  import { position, PositionProps } from 'styled-system';

  const StyledArticle = createStyledComponent<PositionProps>(
    { position: 'relative' }, {}, [position], 'article'
  );
`;
