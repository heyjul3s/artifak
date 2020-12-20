import { Doc } from '../../components/Article';
import { HR } from '../../components/Global/HR';
import { Building, Variants, Setup, Installation, Theming } from './content';

export function GettingStarted() {
  return (
    <Doc title="Getting Started">
      <GettingStartedContent />
    </Doc>
  );
}

export function GettingStartedContent() {
  return (
    <>
      <Installation />
      <HR />
      <Theming />
      <HR />
      <Setup />
      <HR />
      <Variants />
      <HR />
      <Building />
    </>
  );
}
