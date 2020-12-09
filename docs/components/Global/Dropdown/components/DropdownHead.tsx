import React from 'react';
import styled from 'styled-components';
import { DropdownText } from './DropdownText';

export function DropdownHead({ listOpen, headerTitle, toggleList }) {
  return (
    <Header onClick={toggleList} listOpen={listOpen}>
      <HeaderTitle>
        <DropdownText>{headerTitle}</DropdownText>
      </HeaderTitle>

      <Arrow listOpen={listOpen} />
    </Header>
  );
}

type HeaderProps = {
  listOpen?: boolean;
}

const Header = styled.button<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 3px;
  cursor: default;
  cursor: pointer;
  width: 100%;
  -webkit-appearance: none;
  outline: none;
  transition: border 300ms ease-out, background 300ms ease-out, color 300ms ease-out;

  ${({ theme, listOpen }) => `
    color: ${listOpen ? theme.colors.white : theme.colors.grey};
    background-color: ${listOpen ? theme.colors.primary : theme.colors.white};
    border: 1px solid ${listOpen ? theme.colors.primary : theme.colors.extraLightGrey };
  `}

  > span {
    margin-right: 20px;
  }
`;

const HeaderTitle = styled.div`
  margin: 2px 30px 2px 0px;
`;

type ArrowProps = {
  listOpen?: boolean;
}

const Arrow = styled.div<ArrowProps>`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-left: 0.5em;

  ${({ theme, listOpen }) => `
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 1px solid ${listOpen ? theme.colors.white : theme.colors.grey};
    transition: border 300ms ease-out;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: ${listOpen ? '-3px' : '7px'};
      left: 4px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 8px solid ${!listOpen ? theme.colors.grey : 'transparent'};
      border-bottom: 8px solid ${listOpen ? theme.colors.white : 'transparent'};
      transition: border 300ms ease-out, top 300ms ease-out;
    }
  `}
`;
