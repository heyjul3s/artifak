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
        with them, you can turn to the Generator library to do so.
      </Paragraph>

      <Syntax>{generateWithVariants}</Syntax>
    </>
  );
}
