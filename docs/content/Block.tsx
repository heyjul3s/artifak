import { H1, Paragraph, LargeLead, Strong } from '../components/Typography';
import { Syntax, Params } from '../components/Syntax';
import {
  createBlockComponentsExampleUsage,
  createBlockComponentsDemo
} from '../codeExamples/block/createBlockComponents';

export function Block() {
  return (
    <>
      <H1>Block</H1>
      <Paragraph>
        The Block library provides a utility to generate generic components.
        This was made with container elements in mind so will probably be best
        suited for such purposes. If you need something a little more specific,
        you can look into utilising Artifak's component generator.
      </Paragraph>

      <LargeLead>BlockBase</LargeLead>
      <Paragraph>
        BlockBase is the basic block component comprising of several style
        attributes: color, display, layout, typography and space.
      </Paragraph>

      <LargeLead>createBlockComponents</LargeLead>

      <Params
        params={{
          styles: 'CSSobject'
        }}
      />

      <Paragraph>
        To generate some components, simply pass in a styles object.
      </Paragraph>
      <Syntax>{createBlockComponentsExampleUsage}</Syntax>

      <Paragraph>
        Note that the "as" property will need to be defined in order to render
        it as the target element you desire. If unspecified, it will default to
        the{' '}
        <Strong>
          <em>DIV</em>
        </Strong>{' '}
        element. Generated components can then be imported and used.
      </Paragraph>

      <Syntax>{createBlockComponentsDemo}</Syntax>
    </>
  );
}
