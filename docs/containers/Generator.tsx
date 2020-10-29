import { Paragraph, Strong } from '../components/Typography';
import { Syntax } from '../components/Syntax';

import {
  createStyledComponentUsage,
  createBaseComponentsUsage,
  systemExtensionUsage
} from '../codeExamples/generator';

import { HR } from '../components/HR';
import { ArticleDoc } from '../components/ArticleDoc';
import { APIheading } from '../components/APIheading';
import { ArticleSubSectionTitle } from '../components/ArticleSubSectionTitle';

export function Generator() {
  return (
    <ArticleDoc title="Generator">
      <GeneratorContent />
    </ArticleDoc>
  );
}

export function GeneratorContent() {
  return (
    <>
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

      <HR />

      <APIheading
        name="createStyledComponent"
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

      <HR />

      <APIheading
        name="createBaseComponents"
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

      <HR />

      <ArticleSubSectionTitle>
        Customising/Adding CSS properties to the system
      </ArticleSubSectionTitle>

      <Paragraph>
        To add to the previous createBaseComponents components example, let's
        say you'd like to extend the system with some extra CSS properties.
      </Paragraph>

      <Syntax>{systemExtensionUsage}</Syntax>
    </>
  );
}
