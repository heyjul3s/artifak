import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    flex-direction: row;
    padding-top: 0.5em;

    > div {
      flex: 1 1 50%;
      padding-left: 1em;
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
