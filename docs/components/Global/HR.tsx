import styled from 'styled-components';

export const HR = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 3em 0 2.5em;
`;
