import { H1, H2, Paragraph, LargeLead, Strong } from '../components/Typography';
import { Syntax, Params } from '../components/Syntax';

import {
  createStyledComponentUsage,
  createBaseComponentsUsage,
  systemExtensionUsage
} from '../codeExamples/generator';

export function Generator() {
  return (
    <>
      <H1>Generator</H1>
      <Paragraph>
        The component-generator library or generator for short, comprises of 2
        utility functions namely <Strong>createStyledComponent</Strong> and
        &nbsp;
        <Strong>createBaseComponents</Strong>. As you might have guessed, these
        are the core functions of the Artifak library. But for the purposes of
        greater flexibility, these functions have been made available as not all
        style properties are available right off the bat and you may need the
        option to further extend the system.
      </Paragraph>

      <LargeLead>createStyledComponent</LargeLead>

      <Params
        params={{
          systemStyleProps: 'styleFn[]',
          baseStyles: 'CSSObject',
          element: 'keyof JSX.IntrinsicElements'
        }}
      />

      <Paragraph>
        The purpose of this utility function is to generate a base styled
        component which would then be used in createBaseComponents (or not if
        you don't want to).
      </Paragraph>

      <Syntax>{createStyledComponentUsage}</Syntax>

      <LargeLead>createBaseComponents</LargeLead>

      <Params
        params={{
          BaseComponent: 'AnyStyledComponent',
          styles: 'CSSObject'
        }}
      />

      <Paragraph>
        createBaseComponents, as implied, would generate a bunch of styled
        components in accordance to the styles that you provide. This would
        require a base styled component.
      </Paragraph>

      <Syntax>{createBaseComponentsUsage}</Syntax>

      <H2>Customising/Adding CSS properties to the system</H2>

      <Paragraph>
        To add to the previous createBaseComponents components example, let's
        say you'd like to extend the system with some extra CSS properties.
      </Paragraph>

      <Syntax>{systemExtensionUsage}</Syntax>
    </>
  );
}
