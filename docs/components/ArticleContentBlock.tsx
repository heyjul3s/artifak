import React from 'react';
import { H3 } from '../components/Typography';

type Props = {
  sectionTitle: string;
  content: React.ReactNodeArray;
};

export function ArticleContentBlock({ sectionTitle, content }: Props) {
  return (
    <section>
      <H3>{sectionTitle}</H3>
      {content}
    </section>
  );
}
