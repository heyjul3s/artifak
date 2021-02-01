import {
  Paragraph,
  Strong,
  H4,
  HR,
  Syntax,
  Param,
  ParamsTable,
  Doc,
  APIheading,
  FlexTable
} from '@components';

import { BlockBaseUsage } from './examples';

const createBlocksBaseCells = [
  {
    name: 'styles',
    type: 'ScaledCSS',
    defaultValue: '{ }',
    content:
      'The styles that you desire to act as a basis for the rest of the components'
  },
  {
    name: 'attrs',
    type: 'Attributes',
    defaultValue: '{ }',
    content: 'Attributes to include and must be received as an object.'
  },
  {
    name: 'styleProps',
    type: 'styledFn[]',
    defaultValue: '[ ]',
    content: 'Custom style properties.'
  },
  {
    name: 'element',
    type: 'keyof JSX.IntrinsicElements',
    defaultValue: 'div',
    content: 'What element to use for the base.'
  }
];

const createBlocksSettingsCells = [
  {
    name: 'as',
    type: 'string',
    defaultValue: 'N/A',
    content: 'Defines the element to use.'
  },
  {
    name: 'attrs',
    type: 'HTMLAttributes<E>',
    defaultValue: 'N/A',
    content: 'Adds attributes to the component.'
  }
];

export function Block() {
  return (
    <Doc title="Block">
      <BlockContent />
    </Doc>
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
        name="createBlocks"
        params={{
          Base: 'BaseConfig<Props, Attributes, ThemeType>',
          settings: 'Settings<Element>'
        }}
      />

      <Paragraph>
        To generate some components, simply pass in a styles object.
      </Paragraph>

      <H4>Generics</H4>

      <Paragraph>
        The <Strong>createComponents</Strong> has the following type generics.
      </Paragraph>

      <FlexTable
        cells={[
          {
            prop: 'Config',
            subProp: 'required',
            content: 'This will require the type of your Components object.'
          },
          {
            prop: 'ThemeType',
            subProp: 'optional',
            content: 'Defines the type of Theme if any.'
          },
          {
            prop: 'Props',
            subProp: 'optional',
            content: 'Custom properties that may be included.'
          },
          {
            prop: 'Element',
            subProp: 'optional',
            content: 'Type for generated element.'
          }
        ]}
      />

      <H4>Parameters</H4>

      <Paragraph>
        Below are a description of the parameters. Note that the types of the
        parameters will be relying on the generics that you define.
      </Paragraph>

      <Param name="base" types="BaseConfig<Props, Attributes, ThemeType>" />

      <hr style={{ marginBottom: '1.5rem' }} />

      <Paragraph>
        <Strong>base</Strong> is what is used as a basis to generate components
        defined in settings. It can accept another component or a configuration
        object with properties as described by the table below.
      </Paragraph>

      <ParamsTable APIname={'base'} cells={createBlocksBaseCells} />

      <Param name="settings" types="Settings<Element>" />

      <hr style={{ marginBottom: '1.5rem' }} />

      <Paragraph>
        <Strong>settings</Strong> accepts an object with the named properties
        used as a the component name. Properties consists of a Settings object
        comprising of styles with the option of applying an{' '}
        <Strong>attrs</Strong> property and an <Strong>as</Strong> property.
        Note that the end result will also include a <Strong>Base</Strong>{' '}
        component if a configuration object is passed as an argument for the{' '}
        <Strong>base</Strong> parameter.
      </Paragraph>

      <ParamsTable APIname={'settings'} cells={createBlocksSettingsCells} />
    </>
  );
}
