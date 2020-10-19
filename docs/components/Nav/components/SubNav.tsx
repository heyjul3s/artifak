import React from 'react';
import styled from 'styled-components';
import { NavLink } from './NavLink';

export function NavLinkWithChildren({ parentName, navChildren }) {
  return (
    <SubNavParent>
      <SubNavParentLinkText>
        {parentName}
        <SubNavDownArrow />
      </SubNavParentLinkText>

      <SubNav navChildren={navChildren} />
    </SubNavParent>
  )
}

type Props = {
  navChildren: string[];
}

export function SubNav({ navChildren }: Props) {
  return (
    <SubNavContainer>
      {
        navChildren.map((nav, i) => {
          return (
            <NavLink name={nav} query={{ content: nav }} key={`sub-navlink-${i}-${nav}`} />
          );
        })
      }
    </SubNavContainer>
  );
}

const SubNavContainer = styled.nav`
  ${({ theme }) => `
    background: ${theme.colors.primary};
    position: absolute;
    top: 2em;
    left: 1.2em;
    padding: 1em 0.5em 0.5em;
    text-align: left;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    transition: opacity 300ms ease-out, transform 300ms ease-out;

    > a {
      display: block;
      margin-bottom: 0.5em;
      color: ${theme.colors.white};
    }
  `}
`;

const SubNavParent = styled.div`
  display: inline-block;
  position: relative;

  &:hover {
    > ${SubNavContainer} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const SubNavDownArrow = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-left: 0.5em;

  ${({ theme }) => `
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 1px solid ${theme.colors.grey};
    transition: border 300ms ease-out;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 7px;
      left: 4px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 8px solid ${theme.colors.grey};
      transition: border 300ms ease-out;
    }
  `}
`;

const SubNavParentLinkText = styled.div`
  display: inline-block;
  cursor: text;
  text-decoration: none;
  transition: color 400ms ease-out;
  position: relative;
  margin: 0 1em;

  font-family: Poppins,sans-serif;
  font-size: 20px;
  transition: color 300ms ease-out;

  ${({ theme }) => `
    color: ${theme.colors.grey};

    &:hover {
      color: ${theme.colors.primary};

      ${SubNavDownArrow} {
        border-color: ${theme.colors.primary};
        &::before {
          border-top-color: ${theme.colors.primary};
        }
      }
    }
  `}
`;