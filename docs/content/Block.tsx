import { H1, H2, Paragraph, LargeLead, Strong } from '../components/Typography';
import { AnchorLink } from '../components/AnchorLink';
import { Syntax, Params, ParamsDescription } from '../components/Syntax';
import { List } from '../components/List';
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
        suited for such purposes.
      </Paragraph>
      <H2>BlockBase</H2>
      <Paragraph>
        BlockBase is the basic block component comprising of several style
        attributes:
      </Paragraph>
      <List
        data={['space', 'layout', 'display', 'typography', 'color', 'flexbox']}
      />
      <Paragraph>
        This component is used in{' '}
        <Strong>
          <em>createBlockComponents</em>
        </Strong>{' '}
        to generate your components. Refer to{' '}
        <AnchorLink href="https://styled-system.com/api" openAsNewTab={true}>
          <Strong>Styled System API</Strong>
        </AnchorLink>
        &nbsp; for further details regarding the aforementioned style
        attributes.
      </Paragraph>
      <H2>createBlockComponents</H2>

      <ParamsDescription
        label="<args>"
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
