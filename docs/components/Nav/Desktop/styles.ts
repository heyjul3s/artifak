import styled from 'styled-components';
import { AnchorLink } from '../../AnchorLink';
import { LinkProps } from './typings';

export const Link = styled(AnchorLink)<LinkProps>`
  display: block;
`;

export const LinkItem = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavContainer = styled.ul`
  position: relative;
  padding-left: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1em;

  > a {
    margin-bottom: 1em;
  }
`;

export const ChildLinkContainer = styled.li`
  position: relative;
  padding-left: 1em;
  padding-bottom: 1em;
  list-style: none;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 2px;
  }

  ${({ theme }) => `
    &::before {
      border-top: 1px solid ${theme.colors.primary};
      width: 16px;
      height: 0;
      top: calc(50% - 0.5em);
      left: 0;
      transform: translateY(-50%);
    }

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      border-left: 1px solid ${theme.colors.primary};
      height: 100%;
      width: 0px;
    }

    :last-child {
      &::after {
        height: calc(50% - 0.5em);
      }
    }
  `}
`;

export const LinkCount = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-weight: bold;
  padding-top: 2px;

  ${({ theme }) => `
    color: ${theme.colors.white};
  `}
`;

export const Counter = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 0.5em;

  ${({ theme }) => `
    background: ${theme.colors.primary};
  `}
`;
