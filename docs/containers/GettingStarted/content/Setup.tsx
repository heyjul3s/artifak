import { H3, Paragraph } from '../../../components/Typography';
import { Syntax } from '../../../components/Syntax';
import { theme } from '../../../theme';
import { setupExample } from '../codeExamples';

export function Setup() {
  return (
    <>
      <H3 color={theme.colors.primary}>Setup Your Components (Optional)</H3>

      <Paragraph>
        For greenfield projects, it would usually involve some basic setups to
        get up and running. Some of these include setting up your containers and
        typography and Artifak provides a utility function to help in setting up
        these types of components. Below is an example of setting up some
        Typography components.
      </Paragraph>

      <Syntax>{setupExample}</Syntax>
    </>
  );
}
