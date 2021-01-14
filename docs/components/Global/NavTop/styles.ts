import styled from 'styled-components';
import { AnchorLink } from '../../AnchorLink';

export const NavTopMenu = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1.5em;
`;

export const NavTopLink = styled(AnchorLink)`
  position: relative;
  z-index: 1;
  color: white;
  margin-right: 15px;
  top: 2px;
`;

export const NavTopContainer = styled.div<{ panelOpen: boolean }>`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  ${({ theme }) => `
    background-color: ${theme.colors.primary};
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 7px,
      rgba(241, 94, 34, 1) 1px,
      rgba(241, 94, 34, 1) 8px
    );
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
    z-index: 1;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 7px,
      rgba(241, 94, 34, 1) 1px,
      rgba(241, 94, 34, 1) 8px
    );
  }
`;
