import React from 'react';
import { ArticleTitle } from '../components/BlockedSectionTitle';

type Props = {
  title: string;
  children: React.ReactChild;
};

export function ArticleDoc({ title, children }: Props) {
  return (
    <article>
      <ArticleTitle title={title} />
      {children}
    </article>
  );
}
