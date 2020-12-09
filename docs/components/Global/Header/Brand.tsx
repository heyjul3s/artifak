import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../Logo';
// import { BrandLink } from '../styled';
// import { Logo } from '../../Logo';

export function Brand() {
  return (
    <BrandLink>
      <Logo />
    </BrandLink>
  );
}

export const BrandLink = styled.div`
  > svg {
    display: block;
    width: 80px;
    padding-bottom: 1em;
    margin: 0 auto;
  }

  @media (min-width: 1025px) {
    > svg {
      width: 140px;
    }
  }
`;

// import styled from 'styled-components';
// import { AnchorLink } from '../../AnchorLink';
// import { Tagline } from '../styled';

// export const BrandLink = styled(AnchorLink)`
//   > svg {
//     width: 80px;
//     padding-bottom: 0.25em;
//   }

//   @media (min-width: 1025px) {
//     > svg {
//       width: 100px;
//     }
//   }
// `;
