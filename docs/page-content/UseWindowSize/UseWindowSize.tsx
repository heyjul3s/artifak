import { Paragraph, Strong, HR, Doc, APIheading, Syntax } from '@components';
import { useWindowSizeExampleUsage } from './examples';

export function UseWindowSize() {
  return (
    <Doc title="useWindowSize">
      <UseWindowSizeContent />
    </Doc>
  );
}

export function UseWindowSizeContent() {
  return (
    <>
      <Paragraph>
        The useWindowSize hook allows you to query the window size within your
        React component.
      </Paragraph>

      <HR />

      <APIheading name="useWindowSize" />

      <Paragraph>
        Returns an object consisting of properties:{' '}
        <Strong>innerWidth, innerHeight, outerWidth and outerHeight</Strong>.
      </Paragraph>

      <Syntax>{useWindowSizeExampleUsage}</Syntax>
    </>
  );
}
