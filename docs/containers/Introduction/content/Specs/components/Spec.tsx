import React from 'react';
import { H4, Paragraph } from '../../../../../components/Typography';

type Props = {
  title: string;
  content: string | string[];
}

export function Spec({ title, content }: Props) {
  return (
    <>
      <H4>{title}</H4>

      {!Array.isArray(content) && <Paragraph>{content}</Paragraph>}

      {Array.isArray(content) && content.length > 1 && (content as string[]).map((detail, i) => {
        return <Paragraph key={`detail-${i}`}>{detail}</Paragraph>
      })}
    </>
  )
}
