import React from 'react';
import { Paragraph } from '../../../../components/Typography';
import { Section } from '../../../../components/Section';
import { SectionTitle } from '../../../../components/SectionTitle';
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
          <Spec title="R 1.1.4" content="MIT Licence" />
          <Spec title="Node" content=">= 12.19.0" />
          <Spec
            title="Size"
            content={['Minified 4.7kb', 'Minified and Gzipped 1.5kb']}
          />
        </SpecCol>

        <SpecCol>
          <Spec
            title="Peer Dependencies"
            content={[
              'react >= 16.11.0',
              'typescript >= 4.0.0',
              'styled-components >= 4.4.1',
              'styled-system >= 5.1.5'
            ]}
          />
        </SpecCol>
      </SpecContainer>
    </Section>
  );
}
