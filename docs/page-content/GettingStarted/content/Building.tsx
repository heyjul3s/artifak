import { H3, Paragraph } from '../../../components/Typography';
import { Syntax } from '../../../components/Code/Syntax';
import { theme } from '../../../theme';
import { buildExample } from '../examples';

export function Building() {
  return (
    <>
      <H3 color={theme.colors.primary}>Start Building And Profit</H3>

      <Paragraph>
        Apart from utilities, Artifak also has other primitive components in
        place like Flex. Below is an example of how you can synergise the
        previous steps in order to start building.
      </Paragraph>

      <Syntax>{buildExample}</Syntax>
    </>
  );
}
