import React from 'react';
import { ArticleTitle } from '../BlockedSectionTitle';
import { DocProps } from './typings';

export function Doc({ title, children }: DocProps) {
  return (
    <article>
      <ArticleTitle title={title} />
      {children}
    </article>
  );
}
