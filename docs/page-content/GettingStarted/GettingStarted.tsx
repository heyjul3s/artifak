import { Doc, HR } from '@components';
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
