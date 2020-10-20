import React from 'react';
import styled from 'styled-components';
import { ListItem } from '../typings';
import { OptionsList } from './OptionsList';

type Props = {
  list: ListItem[];
  selectItem: (title: string, id: string) => void;
}

export function Options({ list, selectItem }: Props) {
  const onClick = (e) => e.stopPropagation();

  return (
    <OptionsListing role="list" onClick={onClick}>
      <OptionsScrollList>
        <OptionsList list={list} selectItem={selectItem} />
      </OptionsScrollList>
    </OptionsListing>
  );
}

const OptionsScrollList = styled.div`
  padding: 10px 0;
`;

const OptionsListing = styled.div`
 position: absolute;
  z-index: 10;
  width: 100%;
  border: 1px solid rgb(223, 223, 223);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 2px 5px -1px rgb(232, 232, 232);
  background-color: white;
  font-weight: 700;
  text-align: left;
  -webkit-overflow-scrolling: touch;
  margin-top: 10px;
`;
