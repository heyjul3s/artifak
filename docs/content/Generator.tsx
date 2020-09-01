import {
  H1,
  H3,
  Paragraph,
  SmallLead,
  LargeLead
} from '../components/Typography';
import { Syntax, Params } from '../components/Syntax';

import {
  createStyledComponentUsage,
  createBaseComponentsUsage
} from '../codeExamples/generator';

export function Generator() {
  return (
    <>
      <H1>Generator</H1>
      <Paragraph>
        The component-generator library or generator for short, comprises of 2
        utility functions namely createStyledComponent and createBaseComponents.
        As you might have guessed, these are one of the core functions of the
        Artifak library. But for the purposes of greater flexibility, these
        functions have been made available.
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
        component which would then be used in createBaseComponents.
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
        usually require a base styled system component.
      </Paragraph>

      <Syntax>{createBaseComponentsUsage}</Syntax>
    </>
  );
}
