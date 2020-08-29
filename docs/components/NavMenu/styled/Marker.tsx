import styled from 'styled-components';

export const Marker = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 16px solid #ffffff;
  border-bottom: 8px solid transparent;
  position: absolute;
  top: 3px;
  left: 0;
  transform: scale(0);
  transition: transform 300ms ease-out;
`;
