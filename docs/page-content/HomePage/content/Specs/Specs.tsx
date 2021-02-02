import React from 'react';
import { Paragraph, Section, SectionTitle } from '@components';
import { Spec, SpecCol, SpecContainer } from './components';

export function Specs() {
  return (
    <Section>
      <SectionTitle title="Specifications" />
      <Paragraph textAlign="center" mb="2em">
        Further details about the Artifak library are provided below.
      </Paragraph>

      <SpecContainer columnLength={[1, 2]}>
        <SpecCol>
          <Spec title="R 2.0.3" content="MIT Licence" />
          <Spec title="Node" content=">= 14.15.1" />
          <Spec
            title="Size"
            content={['Minified 48.7kb', 'Minified and Gzipped 9.1kb']}
          />
        </SpecCol>

        <SpecCol>
          <Spec
            title="Peer Dependencies"
            content={[
              'react >= 17.0.1',
              'typescript >= 4.1.3',
              'styled-components >= 5.2.1',
              'styled-system >= 5.1.5'
            ]}
          />
        </SpecCol>
      </SpecContainer>
    </Section>
  );
}
