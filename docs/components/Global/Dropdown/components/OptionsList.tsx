import React from 'react';
import styled from 'styled-components';
import { DropdownText } from './DropdownText';
import type { ListItem } from '../typings';

type Props = {
  list: ListItem[];
  searchable?: boolean;
  keyword?: string;
  selectItem: (title: string, id: string, component: string) => void;
}

export function OptionsList({ list, searchable = false, keyword = '', selectItem }: Props) {
  let tempList = list;

  if (tempList.length) {
    return (
      <>
        {
          tempList.map(({ title, id, component, selected }) => (
            <OptionItem
              type="button"
              key={id}
              onClick={() => selectItem(title, id, component)}
            >
              <DropdownText>{title}</DropdownText>
              {' '}
            </OptionItem>
          ))
        }
      </>
    );
  }

  return <NoOptionItems>{searchable[1]}</NoOptionItems>;
}

const OptionItem = styled.button`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  padding: 8px 10px;
  font-size: 1.5rem;
  line-height: 1.6rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: default;
  cursor: pointer;
  border: none;
  background: transparent;
  color: black;
  text-align: left;
  -webkit-appearance: none;
  outline: none;

  ${({ theme }) => `
    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `}
`;

const NoOptionItems = styled(OptionItem)`
  font-weight: normal;
  cursor: default;

  &:hover
    background-color: transparent;
    color: black;
`;
