import {
  H1,
  H2,
  H3,
  H4,
  SmallLead,
  Paragraph,
  LargeLead,
  SmallParagraph,
  Strong
} from '../components/Typography';

import { Syntax } from '../components/Syntax';

import { ImageryUsage, ImageryBaseUsage } from '../codeExamples/imagery';

export function Imagery() {
  return (
    <>
      <H1>Imagery</H1>

      <Paragraph>
        Imagery comprises of 2 basic components you can use which are the{' '}
        <Strong>Imagery</Strong> &nbsp; and <Strong>ImageryBase</Strong>{' '}
        components.
      </Paragraph>

      <LargeLead>ImageryBase</LargeLead>
      <Paragraph>
        ImageryBase is a basic raw component loaded with styled-components
        properties.
      </Paragraph>

      <Syntax>{ImageryBaseUsage}</Syntax>

      <LargeLead>Imagery</LargeLead>
      <Paragraph>
        Imagery will include basic styles and srcset and sizes attribute checks
        before applying them. Simply import to use and pass whatever props you
        may need.
      </Paragraph>

      <Syntax>{ImageryUsage}</Syntax>
    </>
  );
}
