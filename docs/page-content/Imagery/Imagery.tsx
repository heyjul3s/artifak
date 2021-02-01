import { Paragraph, Strong } from '../../components/Typography';
import { Syntax } from '../../components/Code/Syntax';
import { ImageryUsage, ImageryBaseUsage } from './examples';
import { HR } from '../../components/Global/HR';
import { Doc } from '../../components/Article';
import { APIheading } from '../../components/APIheading';

export function Imagery() {
  return (
    <Doc title="Imagery">
      <ImageryContent />
    </Doc>
  );
}

export function ImageryContent() {
  return (
    <>
      <Paragraph>
        Imagery comprises of 2 basic components you can use which are the{' '}
        <Strong>Imagery</Strong> &nbsp; and <Strong>ImageryBase</Strong>{' '}
        components.
      </Paragraph>

      <HR />

      <APIheading name="ImageryBase" />
      <Paragraph>
        ImageryBase is a basic raw component loaded with styled-components
        properties.
      </Paragraph>

      <Syntax>{ImageryBaseUsage}</Syntax>

      <HR />

      <APIheading name="Imagery" />
      <Paragraph>
        Imagery will include basic styles and srcset and sizes attribute checks
        before applying them. Simply import to use and pass whatever props you
        may need.
      </Paragraph>

      <Syntax>{ImageryUsage}</Syntax>
    </>
  );
}
