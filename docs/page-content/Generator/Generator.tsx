import {
  Paragraph,
  Strong,
  H4,
  Syntax,
  ParamsTable,
  Param,
  FlexTable,
  HR,
  Doc,
  APIheading
} from '@components';

import { createComponentsUsage, createStyledComponentUsage } from './examples';

export function Generator() {
  return (
    <Doc title="Generator">
      <GeneratorContent />
    </Doc>
  );
}

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
    content: 'Custom style properties that allows you to define inline styles.'
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

export function GeneratorContent() {
  return (
    <>
      <Paragraph>
        The component-generator library or generator for short, includes a{' '}
        <Strong>createComponents</Strong> utility function to generate some
        simple Styled Components. The objective of this function is to attempt
        to create consistent style bases for component development and provide
        some flexibility as sometimes a need for custom style properties may
        arise. This does not cater to detailed, complex, and or single-use case
        components that you may require.
      </Paragraph>
      <HR />
      <APIheading
        name="createComponents"
        params={{
          Base: 'BaseConfig<Props, Attributes, ThemeType>',
          settings: 'Settings<Element>'
        }}
      />

      <Syntax>{createComponentsUsage}</Syntax>

      <HR />

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

      <HR />

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

      <HR />

      <APIheading
        name="createStyledComponent"
        params={{
          Base: 'BaseConfig<Props, Attributes, ThemeType>'
        }}
      />

      <Syntax>{createStyledComponentUsage}</Syntax>

      <HR />

      <H4>Generics</H4>

      <Paragraph>
        Much like createComponents, the <Strong>createStyledComponent</Strong>{' '}
        function also has its own generic types.
      </Paragraph>

      <FlexTable
        cells={[
          {
            prop: 'Props',
            subProp: 'optional',
            content: 'Custom properties that may be included.'
          },
          {
            prop: 'ThemeType',
            subProp: 'optional',
            content: 'Defines the type of Theme if any.'
          },
          {
            prop: 'Attributes',
            subProp: 'optional',
            content: 'Type for generated element.'
          }
        ]}
      />

      <HR />

      <H4>Parameters</H4>

      <Paragraph>
        The <Strong>base</Strong> parameter for createStyledComponent is of the
        same type used in createComponents.
      </Paragraph>

      <Param name="base" types="BaseConfig<Props, Attributes, ThemeType>" />

      <ParamsTable APIname={'base'} cells={createBlocksBaseCells} />
    </>
  );
}
