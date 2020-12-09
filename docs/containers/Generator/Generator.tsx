import { Paragraph, Strong } from '../../components/Typography';
import { Syntax } from '../../components/Code/Syntax';
import { ParamsTable } from '../../components/Code/ParamsTable';
import {
  createStyledComponentUsage,
  createBaseComponentsUsage
} from './examples';
import { HR } from '../../components/Global/HR';
import { Doc } from '../../components/Article';
import { APIheading } from '../../components/APIheading';

export function Generator() {
  return (
    <Doc title="Generator">
      <GeneratorContent />
    </Doc>
  );
}

const createStyledComponentCells = [
  {
    name: 'attrs',
    type: 'Attrs<Props, Theme, Attributes>',
    defaultValue: '{ }',
    content:
      'This will define attributes that you wish to be added onto the base.'
  },
  {
    name: 'styleProps',
    type: 'styleFn[]',
    defaultValue: '[ ]',
    content:
      'This will accept any additional Styled System CSS properties that you wish to include.'
  },
  {
    name: 'styles',
    defaultValue: '{ }',
    type: 'CSSObject | TemplateStringsArray | InterpolationFunction<any>',
    content:
      'Define your styles here. Accepts a CSS object or interpolated string styles.'
  },
  {
    name: 'element',
    type: 'keyof JSX.IntrinsicElements',
    defaultValue: 'div',
    content:
      'Dictate which HTML element you would like to use for this base component.'
  }
];

const createBaseComponentsCells = [
  {
    name: 'styles',
    type: 'StyledSystemCSSObject',
    defaultValue: 'N/A',
    content: 'Adds styles to the component.'
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
        The component-generator library or generator for short, comprises of 2
        utility functions namely <Strong>createStyledComponent</Strong> and
        &nbsp;
        <Strong>createBaseComponents</Strong>. The purpose of the Generator is
        to help setup a base Styled Component loaded with Styled System
        properties to which is then used to generate components. Usage of the
        Generator is limited in a sense that it is meant to be used in lieu with
        simpler, less complex components or in other words, helping in creating
        primitive building blocks for your application.
      </Paragraph>

      <Paragraph>
        As you might have guessed, these are the core functions of the Artifak
        library. But for the purposes of greater flexibility, these functions
        have been made available as not all style properties are available right
        off the bat and you may need the option to further extend the system.
      </Paragraph>

      <HR />

      <APIheading
        name="createStyledComponent"
        params={{
          config: 'StyledComponentConfig<Props, Theme, Attributes>'
        }}
      />

      <ParamsTable
        APIname={'config'}
        APItypes={'StyledComponentConfig<Props, Theme, Attributes>'}
        cells={createStyledComponentCells}
      />

      <Paragraph>
        The purpose of this utility function is to generate a base styled
        component which would then be used in createBaseComponents (or not if
        you don't want to). You can load up on Styled System properties or
        default attributes here if you wish.
      </Paragraph>

      <Syntax>{createStyledComponentUsage}</Syntax>

      <HR />

      <APIheading
        name="createBaseComponents"
        params={{
          Base: 'AnyStyledComponent',
          settings:
            '{ [key in keyof S]: Settings<HTMLAttributes<E>> | StyledSystemCSSObject }'
        }}
      />

      <ParamsTable
        APIname={'settings'}
        APItypes={'Settings<HTMLAttributes<E>> | StyledSystemCSSObject'}
        cells={createBaseComponentsCells}
      />

      <Paragraph>
        createBaseComponents, as implied, would generate a bunch of styled
        components in accordance to the styles that you provide. This would
        require a base styled component.
      </Paragraph>

      <Syntax>{createBaseComponentsUsage}</Syntax>
    </>
  );
}
