import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${theme.container[0]};
  padding-left: 1em;
  padding-right: 1em;

  @media (min-width: 576px) {
    width: 100%;
    max-width: ${theme.container[1]};
  }

  @media (min-width: 768px) {
    width: 100%;
    max-width: ${theme.container[2]};
  }

  @media (min-width: 992px) {
    width: 100%;
    max-width: ${theme.container[3]};
  }
`;
