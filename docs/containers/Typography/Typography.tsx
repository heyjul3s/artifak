import { Paragraph, H4, Strong } from '../../components/Typography';
import { Syntax, Param, ParamsTable } from '../../components/Code';
import { FlexTable } from '../../components/FlexTable';
import {
  createTypographExample,
  createTypographyComponentsDemo,
  fontWeightExampleUsage
} from './examples';
import { HR } from '../../components/Global/HR';
import { Doc } from '../../components/Article';
import { APIheading } from '../../components/APIheading';

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

export function Typography() {
  return (
    <Doc title="Typography">
      <TypographyContent />
    </Doc>
  );
}

export function TypographyContent() {
  return (
    <>
      <Paragraph>
        The typography library offers utilities to help you scaffold your React
        typography components which include <Strong>createTypography</Strong>{' '}
        and a constant <Strong>fontWeight</Strong>.
      </Paragraph>

      <HR />

      <APIheading
        name="createTypography"
        params={{
          Base: 'BaseConfig<Props, Attributes, ThemeType>',
          settings: 'Settings<Element>'
        }}
      />

      <Paragraph>
        As opposed to branching off of a single component, this function allows
        you to generate your Typography components. This way you will have more
        room to operate in terms of defining the tone of your Typographic
        elements via variants.
      </Paragraph>

      <Syntax>{createTypographExample}</Syntax>

      <HR />

      <H4>Generics</H4>

      <Paragraph>
        The <Strong>createTypography</Strong> has the following type generics.
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
        defined in settings. It accepts a configuration object with properties
        as described by the table below.
      </Paragraph>

      <ParamsTable APIname={'base'} cells={createBlocksBaseCells} />

      <Param name="settings" types="Settings<Element>" />

      <hr style={{ marginBottom: '1.5rem' }} />

      <Paragraph>
        <Strong>settings</Strong> accepts an object with the named properties
        used as a the component name. Properties consists of a Settings object
        comprising of styles with the option of applying an{' '}
        <Strong>attrs</Strong> property and an <Strong>as</Strong> property.
      </Paragraph>

      <ParamsTable APIname={'settings'} cells={createBlocksSettingsCells} />

      <HR />

      <APIheading name="fontWeight" />

      <Paragraph>
        fontWeight is essentially just a constant. Nothing special here. This is
        just to provide a fully typed and ready-to-use constant for usage and or
        to simply add to your styles theme. Simply import this to use.
      </Paragraph>

      <Syntax>{fontWeightExampleUsage}</Syntax>
    </>
  );
}
