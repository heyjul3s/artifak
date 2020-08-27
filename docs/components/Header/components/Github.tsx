import { AnchorLink } from '../../AnchorLink';
import { GithubLinkContainer } from '../styled';

export function Github() {
  return (
    <GithubLinkContainer>
      <GithubLink />
    </GithubLinkContainer>
  );
}

export function GithubLink() {
  return (
    <>
      Source on{' '}
      <AnchorLink href="https://github.com/heyjul3s/artifak">Github</AnchorLink>
    </>
  );
}
