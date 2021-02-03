import { Paragraph, Strong, HR, Doc, APIheading } from '@components';
import { Syntax } from '../../components/Code/Syntax';
import { ImageryUsage, ImageryBaseUsage } from './examples';

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
