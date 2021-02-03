export const createStyledComponentUsage = `
  import { HTMLAttributes } from 'react';
  import { position, PositionProps } from 'styled-system';
  import { theme } from './theme';

  type CardProps = {
    isHidden: boolean;
  } & PositionProps;

  const StyledArticle = createStyledComponent<CardProps, typeof theme, HTMLAttributes<HTMLDivElement>>({
    styles: { position: 'relative' },
    attrs: { title: 'Hello World' },
    styledProps: [position],
    element: 'article'
  });
`;
