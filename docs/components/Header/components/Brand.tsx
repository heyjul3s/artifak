import { BrandLink } from '../styled';
import { Logo } from '../../Logo';
import { Tagline } from '../styled';

export function Brand() {
  return (
    <BrandLink href="/">
      <>
        <Logo logoColor={'#FFF'} textColor={'#FFF'} />
        <Tagline />
      </>
    </BrandLink>
  );
}
