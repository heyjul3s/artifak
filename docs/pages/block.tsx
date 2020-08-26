import { Layout } from '../components/Layout';
import { H1, Paragraph, LargeLead } from '../components/Typography';
import { Syntax } from '../components/Syntax';

import {
  createBlockComponentsExampleUsage,
  createBlockComponentsDemo
} from '../strings/block/createBlockComponents';

export default function Block() {
  return (
    <Layout>
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

        <ul>
          <li>space</li>
          <li>layout</li>
          <li>display</li>
          <li>typography</li>
          <li>color</li>
          <li>flexbox</li>
        </ul>

        <LargeLead>createBlockComponents</LargeLead>

        <Paragraph>
          To generate some components, simply pass in a styles object.
        </Paragraph>

        <Syntax>{createBlockComponentsExampleUsage}</Syntax>

        <Paragraph>
          Generated components can then be imported and used.
        </Paragraph>

        <Syntax>{createBlockComponentsDemo}</Syntax>
      </>
    </Layout>
  );
}
