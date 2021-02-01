import { H3, Paragraph } from '../../../components/Typography';
import { Syntax } from '../../../components/Code/Syntax';
import { theme } from '../../../theme';
import { installationExample } from '../examples';

export function Installation() {
  return (
    <>
      <H3 color={theme.colors.primary}>Installation</H3>
      <Paragraph>First, install Artifak</Paragraph>

      <Syntax>{installationExample}</Syntax>
    </>
  );
}
