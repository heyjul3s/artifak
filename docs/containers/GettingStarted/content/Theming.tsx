import { H3, Paragraph } from '../../../components/Typography';
import { Syntax } from '../../../components/Syntax';
import { theme } from '../../../theme';
import { themingExample } from '../codeExamples';

export function Theming() {
  return (
    <>
      <H3 color={theme.colors.primary}>Theming</H3>
      <Paragraph>
        Artifak does not include a theme by default. This is entirely up to you
        and you can easily plug in your theme via ThemeProvider.
      </Paragraph>

      <Syntax>{themingExample}</Syntax>
    </>
  );
}
