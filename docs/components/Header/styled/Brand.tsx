import styled from 'styled-components';
import { AnchorLink } from '../../AnchorLink';
import { Tagline } from '../styled';

export const BrandLink = styled(AnchorLink)`
  > svg {
    width: 80px;
    padding-bottom: 0.25em;
  }

  @media (min-width: 1025px) {
    > svg {
      width: 100px;
    }
  }
`;
