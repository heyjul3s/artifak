import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    flex-direction: row;

    > div {
      flex: 1 1 50%;
    }
  }
`;

export const FlexItem = styled.div`
  display: flex;
  flex-direction: column;

  a {
    padding-bottom: 15px;
  }
`;
