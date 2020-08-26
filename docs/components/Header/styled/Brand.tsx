import styled from 'styled-components';
import { AnchorLink } from '../../AnchorLink';

export const BrandLink = styled(AnchorLink)`
  > svg {
    width: 60px;
  }

  @media (min-width: 1025px) {
    > svg {
      width: 160px;
    }
  }
`;
