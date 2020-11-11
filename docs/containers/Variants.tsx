import { Paragraph } from '../components/Typography';
import { Syntax } from '../components/Syntax';
import { generateWithVariants } from '../codeExamples/variants';
import { ArticleDoc } from '../components/ArticleDoc';
import { ArticleSubSectionTitle } from '../components/ArticleSubSectionTitle';

export function Variants() {
  return (
    <ArticleDoc title="Variants">
      <VariantsContent />
    </ArticleDoc>
  );
}

export function VariantsContent() {
  return (
    <>
      <ArticleSubSectionTitle>
        Generating Components With Variants
      </ArticleSubSectionTitle>

      <Paragraph>
        For occasions that you want to create components and include variants
        with them, you can use the createStyledComponent utility function to do
        so and after you can use the createBaseComponents to generate off of
        your newly created base Styled Component if you wish to.
      </Paragraph>

      <Syntax>{generateWithVariants}</Syntax>
    </>
  );
}
