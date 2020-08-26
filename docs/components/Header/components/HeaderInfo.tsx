import { LargeLead, Paragraph } from '../../Typography';
import { Github } from './Github';
import { HeaderInfoContainer } from '../styled';

export function HeaderInfo() {
  return (
    <HeaderInfoContainer>
      <ReleaseTag />
      <Tagline />
      <Github />
    </HeaderInfoContainer>
  );
}

export function ReleaseTag() {
  return (
    <LargeLead fontSize={[24, 36]} marginBottom="0.15em">
      R 1.0.2
    </LargeLead>
  );
}

export function Tagline() {
  return <Paragraph>A React UI primitives library</Paragraph>;
}
