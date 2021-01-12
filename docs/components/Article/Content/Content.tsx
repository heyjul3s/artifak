import React from 'react';
import { H3 } from '../../Typography';
import { ContentProps } from './typings';

export function Content({ sectionTitle, content }: ContentProps) {
  return (
    <section>
      <H3>{sectionTitle}</H3>
      {content}
    </section>
  );
}
