import { Paragraph, Doc, HR, APIheading, Syntax } from '@components';
import { useMatchMediaExampleUsage } from './examples';

export function UseMatchMedia() {
  return (
    <Doc title="useMatchMedia">
      <UseMatchMediaContent />
    </Doc>
  );
}

export function UseMatchMediaContent() {
  return (
    <>
      <Paragraph>
        The useMatchMedia hook allows you to perform media queries within your
        React Component. This hook can also accept object arguments as per
        Artifak's Media utility function.
      </Paragraph>

      <HR />

      <APIheading
        name="useMatchMedia"
        params={{
          query: 'string'
        }}
      />

      <Syntax>{useMatchMediaExampleUsage}</Syntax>
      <br />
    </>
  );
}
