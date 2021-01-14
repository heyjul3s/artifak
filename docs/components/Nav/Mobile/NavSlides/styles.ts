import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AnchorLink } from '../../../AnchorLink';

export const NavMenu = styled(motion.div)`
  position: relative;

  ${({ theme }) => `
    background: ${theme.colors.primary};
  `}
`;

export const NavMenuPanel = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MenuTitle = styled.p`
  display: inline-block;
  margin: 0 auto 2em;
  padding-bottom: 0.5em;

  ${({ theme }) => `
    color: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.white};
  `}
`;

export const NavLink = styled(AnchorLink)<{
  onClick: (e: React.SyntheticEvent) => void;
}>`
  margin: 0 auto;
  width: auto;
  font-size: 1.25rem;
  margin-bottom: 1em;
  cursor: pointer;

  ${({ theme }) => `
    color: ${theme.colors.white};
  `};
`;

export const CloseButtonContainer = styled(motion.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 50%;
  top: 1em;
  left: calc(50vw - 20px);
  padding: 0.5em;
  z-index: 1;
`;
