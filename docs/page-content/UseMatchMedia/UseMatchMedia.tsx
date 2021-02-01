import { Paragraph, Strong } from '../../components/Typography';
import { Syntax } from '../../components/Code/Syntax';
import { HR } from '../../components/Global/HR';
import { Doc } from '../../components/Article';
import { APIheading } from '../../components/APIheading';
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
