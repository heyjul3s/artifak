import { H1, Paragraph, LargeLead } from '../components/Typography';
import { Syntax } from '../components/Syntax';
import { List } from '../components/List';
import {
  createBlockComponentsExampleUsage,
  createBlockComponentsDemo
} from '../strings/block/createBlockComponents';

export function Block() {
  return (
    <>
      <H1>Block</H1>

      <Paragraph>
        The Block library provides a utility to generate generic components.
        This was made with container elements in mind so will probably be best
        suited for such purposes.
      </Paragraph>

      <Paragraph>
        Generic blocks will comprise of the following style attributes:
      </Paragraph>

      <List
        data={['space', 'layout', 'display', 'typography', 'color', 'flexbox']}
      />

      <Paragraph>
        Refer to <a href="https://styled-system.com/api">Styled System API</a>
        for further details.
      </Paragraph>

      <LargeLead>createBlockComponents</LargeLead>

      <Paragraph>
        To generate some components, simply pass in a styles object.
      </Paragraph>

      <Syntax>{createBlockComponentsExampleUsage}</Syntax>

      <Paragraph>Generated components can then be imported and used.</Paragraph>

      <Syntax>{createBlockComponentsDemo}</Syntax>
    </>
  );
}
