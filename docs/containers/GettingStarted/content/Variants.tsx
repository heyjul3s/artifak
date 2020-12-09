import { H3, Paragraph } from '../../../components/Typography';
import { Syntax } from '../../../components/Syntax';
import { theme } from '../../../theme';
import { variantsExample } from '../codeExamples';

export function Variants() {
  return (
    <>
      <H3 color={theme.colors.primary}>
        Using Variants With Your Generated Items
      </H3>

      <Paragraph>
        In conjunction with the previous example. Sometimes, we would like
        variants with our generated components. We can do this via the variants
        utility function.
      </Paragraph>

      <Syntax>{variantsExample}</Syntax>
    </>
  );
}
