import { BrandLink } from '../styled';
import { Logo } from '../../Logo';
import { Paragraph } from '../../Typography';

export function Brand() {
  return (
    <BrandLink href="/">
      <>
        <Logo />
        <Tagline />
      </>
    </BrandLink>
  );
}

function Tagline() {
  return (
    <Paragraph pb="0" mb="0">
      a React UI primitives library
    </Paragraph>
  );
}
