import { Paragraph, Syntax, Doc, ArticleSubSectionTitle } from '@components';
import { systemExtensionUsage } from './examples';

export function Customisation() {
  return (
    <Doc title="Customisation">
      <CustomisationContent />
    </Doc>
  );
}

export function CustomisationContent() {
  return (
    <>
      <ArticleSubSectionTitle>
        Customising/Adding CSS properties
      </ArticleSubSectionTitle>

      <Paragraph>
        To add to the previous createBaseComponents components example, let's
        say you'd like to extend the system with some extra CSS properties.
      </Paragraph>

      <Syntax>{systemExtensionUsage}</Syntax>
    </>
  );
}
