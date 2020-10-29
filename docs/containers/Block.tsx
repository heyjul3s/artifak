import { Paragraph, Strong } from '../components/Typography';
import { Syntax } from '../components/Syntax';
import { HR } from '../components/HR';

import {
  BlockBaseUsage,
  createBlockComponentsExampleUsage,
  createBlockComponentsDemo
} from '../codeExamples/block';

import { ArticleDoc } from '../components/ArticleDoc';
import { APIheading } from '../components/APIheading';

export function Block() {
  return (
    <ArticleDoc title="Block">
      <BlockContent />
    </ArticleDoc>
  );
}

export function BlockContent() {
  return (
    <>
      <Paragraph>
        The Block library provides a utility to generate generic components.
        This was made with container elements in mind so will probably be best
        suited for such purposes. If you need something a little more specific,
        you can look into utilising Artifak's component generator.
      </Paragraph>

      <HR />

      <APIheading name="BlockBase" />
      <Paragraph>
        BlockBase is the basic block component comprising of several style
        attributes: color, display, layout, typography and space.
      </Paragraph>
      <Syntax>{BlockBaseUsage}</Syntax>

      <HR />

      <APIheading
        name="createBlockComponents"
        params={{
          styles: 'CSSObject'
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
