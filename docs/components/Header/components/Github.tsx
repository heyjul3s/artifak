import { AnchorLink } from '../../AnchorLink';
import { GithubLinkContainer, GithubMobileLinkContainer } from '../styled';

export function Github() {
  return (
    <GithubLinkContainer>
      <GithubLink />
    </GithubLinkContainer>
  );
}

export function GithubMobile() {
  return (
    <GithubMobileLinkContainer>
      <GithubLink />
    </GithubMobileLinkContainer>
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
