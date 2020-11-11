import { Paragraph, Strong } from '../components/Typography';
import { Syntax } from '../components/Syntax';

import { systemExtensionUsage } from '../codeExamples/customisation';

import { HR } from '../components/HR';
import { ArticleDoc } from '../components/ArticleDoc';
import { ArticleSubSectionTitle } from '../components/ArticleSubSectionTitle';

export function Customisation() {
  return (
    <ArticleDoc title="Customisation">
      <CustomisationContent />
    </ArticleDoc>
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
