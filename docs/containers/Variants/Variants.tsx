import { Paragraph } from '../../components/Typography';
import { Syntax } from '../../components/Code/Syntax';
import {
  generateWithVariants,
  addingVariantsStyledSystem,
  addingVariantsStyledComponents
} from './examples';
import { Doc } from '../../components/Article';
import { ArticleSubSectionTitle } from '../../components/Article/ArticleSubSectionTitle';
import { APIheading } from '../../components/APIheading';
import { HR } from '../../components/Global/HR';

export function Variants() {
  return (
    <Doc title="Variants">
      <VariantsContent />
    </Doc>
  );
}

export function VariantsContent() {
  return (
    <>
      <ArticleSubSectionTitle>
        Adding Variants As Part Of The Component Generation Process
      </ArticleSubSectionTitle>

      <Paragraph>
        For occasions that you want to create components and include variants
        with them, you can use the createStyledComponent utility function to do
        so and after you can use the createBaseComponents to generate off of
        your newly created base Styled Component if you wish to. Also a reminder
        that the Generator is meant to be used for creating similar components
        and applying variants here will apply to all generated components.
      </Paragraph>

      <Syntax>{generateWithVariants}</Syntax>

      <HR />

      <ArticleSubSectionTitle>
        Adding Variants To Specific Generated Components
      </ArticleSubSectionTitle>

      <Paragraph>
        If you need variants specifically just for a component or if the
        variants are component specific, you can add them after the generation
        process the usual way either the Styled Components way or Styled System
        way.
      </Paragraph>

      <APIheading name="Variants Via Styled Components" />
      <Syntax>{addingVariantsStyledComponents}</Syntax>

      <APIheading name="Variants Via Styled System" />
      <Syntax>{addingVariantsStyledSystem}</Syntax>
    </>
  );
}
