import { LargeLead, SmallParagraph, SmallLead } from '../../Typography';
import { Github } from './Github';
import { HeaderInfoContainer } from '../styled';

export function HeaderInfo() {
  return (
    <HeaderInfoContainer>
      <ReleaseTag />
      <Github />
      <Licence />
      <InstallationInsructions />
    </HeaderInfoContainer>
  );
}

export function Licence() {
  return <SmallParagraph>MIT licence</SmallParagraph>;
}

export function InstallationInsructions() {
  return (
    <>
      <SmallLead mb={'0.25em'}>Installation</SmallLead>
      <SmallParagraph mb={'0.25em'}>{`> yarn add artifak`}</SmallParagraph>
      <SmallParagraph mb={0}>{`> npm install artifak`}</SmallParagraph>
    </>
  );
}

export function ReleaseTag() {
  return (
    <LargeLead fontWeight={700} fontSize={[24, 26]} marginBottom="0.15em">
      R 1.1.0
    </LargeLead>
  );
}
