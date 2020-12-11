import React from 'react';
import { FlexRow, FlexCol } from 'artifak';
import { H2, Paragraph } from '../../../components/Typography';
import { SectionTitle } from '../../../components/SectionTitle';

export function About() {
  return (
    <>
      <SectionTitle title="Artifak" />
      <FlexRow>
        <FlexCol columnSize={[12, 8]} offset={[0, 2]}>
          <Paragraph textAlign="center" mb="0.5em">
            Artifak is a library that comprises of basic UI primitives and
            utility functions to help you build your React application system
            components. Built with Typescript and Styled System, the aim is to
            attempt to provide basic building blocks with sensible defaults plus
            some bonus utility functions without getting in the way of what you
            want to build.
          </Paragraph>
        </FlexCol>
      </FlexRow>
    </>
  );
}
