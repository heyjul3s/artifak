import { H1, H3, Paragraph, SmallLead } from '../components/Typography';
import { Syntax } from '../components/Syntax';

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

      <H3>createStyledComponent</H3>
      <SmallLead>systemStyleProps: styleFn[]</SmallLead>
      <SmallLead>baseStyles: CSSObject</SmallLead>
      <SmallLead>element: styleFn[]</SmallLead>

      <Paragraph>
        The purpose of this utility function is to generate a base styled
        component which would then be used in createBaseComponents.
      </Paragraph>

      <Syntax>{createStyledComponentUsage}</Syntax>

      <H3>createBaseComponents</H3>

      <SmallLead>BaseComponent: AnyStyledComponent</SmallLead>
      <SmallLead>styles: CSSObject</SmallLead>

      <Paragraph>
        createBaseComponents, as implied, would generate a bunch of styled
        components in accordance to the styles that you provide. This would
        usually require a base styled system component.
      </Paragraph>

      <Syntax>{createBaseComponentsUsage}</Syntax>
    </>
  );
}
