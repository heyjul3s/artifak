import styled from 'styled-components';

export const NavContainer = styled.div<{ panelOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: ${({ panelOpen }) => (!!panelOpen ? 'auto' : 'none')};
`;

export const NavbarIconWrapper = styled.svg`
  display: block;
  width: 26px;
  height: 26px;
  padding-bottom: 5px;

  > svg {
    width: 100%;
    height: 100%;
  }
`;
