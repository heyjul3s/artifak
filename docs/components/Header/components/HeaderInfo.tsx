import { LargeLead, SmallParagraph, Strong } from '../../Typography';
import { Github } from './Github';
import { HeaderInfoContainer } from '../styled';

export function HeaderInfo() {
  return (
    <HeaderInfoContainer>
      <ReleaseTag />
      <Github />
      <SmallParagraph>
        <Strong>MIT</Strong> licenced
      </SmallParagraph>
    </HeaderInfoContainer>
  );
}

export function ReleaseTag() {
  return (
    <LargeLead fontWeight={700} fontSize={[24, 26]} marginBottom="0.15em">
      R 1.0.9
    </LargeLead>
  );
}
