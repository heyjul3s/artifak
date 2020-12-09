import { ArticleDoc } from '../../components/ArticleDoc';
import { HR } from '../../components/HR';
import { Building, Variants, Setup, Installation, Theming } from './content';

export function GettingStarted() {
  return (
    <ArticleDoc title="Getting Started">
      <GettingStartedContent />
    </ArticleDoc>
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
