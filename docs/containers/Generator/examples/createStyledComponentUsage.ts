export const createStyledComponentUsage = `
  import { position, PositionProps } from 'styled-system';

  // A basic example
  const StyledArticle = createStyledComponent<PositionProps>({
    styles: { position: 'relative' },
    styledProps: [position],
    element: 'article'
  });

  // If you need to add attributes, you can do it like so
  // By default, element is set as "DIV"
  const StyledButton = createStyledComponent<PositionProps>({
    attrs: ({ role }) => ({ role: role || 'button' })
    styles: { position: 'relative' },
    styledProps: [position],
  })
`;
