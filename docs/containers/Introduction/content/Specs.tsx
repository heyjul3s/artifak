import React from 'react';
import { H2, Paragraph } from '../../../components/Typography';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';

const specs = [
  {
    title: 'R 1.1.2',
    content: 'MIT Licence'
  },
  {
    title: 'Peer Dependencies',
    content: [
      'react >= 16.11.0',
      'typescript >= 4.0.0',
      'styled-components >= 4.4.1',
      'styled-system >= 5.1.1'
    ]
  },
  {
    title: 'Node',
    content: '>= 10.14.2'
  },
  {
    title: 'Size',
    content: [
      'Minified 9.9kb',
      'Minified and Gzipped 2.3kb'
    ]
  },
];

export function Specs() {
  return (
    <Section>
      <SectionTitle title="Specifications" />
      <Paragraph textAlign="center" mb="0.5em">
        Further details about the Artifak library are provided below.
      </Paragraph>

      {
        specs.map(({ title, content }, i) => {
          return (
            <>
              <Paragraph>{title}</Paragraph>

              {content.length === 1 && <Paragraph>{content}</Paragraph>}

              {content.length > 1 && (content as string[]).map((detail, i) => {
                return <Paragraph>{detail}</Paragraph>
              })}
            </>
          )
        })
      }
    </Section>
  );
}

