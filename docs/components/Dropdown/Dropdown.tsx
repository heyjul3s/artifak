import React from 'react';
import { useRouter } from 'next/router'
import styled from 'styled-components';
import { DropdownHead, Options } from './components';

type Props = {
  title: string;
  list: ListItemProp[];
}

type ListItemProp = {
  id: string;
  title: string;
  selected: boolean;
  key: string;
}

export function Dropdown({ title = '', list = [] }: Props) {
  const router = useRouter();
  const [listOpen, setListOpen] = React.useState(false);
  const [headerTitle, setHeaderTitle] = React.useState('');

  React.useEffect(() => {
    setHeaderTitle(title);
  }, []);

  React.useEffect(() => {
    if (!!listOpen) {
      window.addEventListener('click', close);
    }

    return function cleanupListener() {
      window.removeEventListener('click', close)
    }
  }, [listOpen]);

  React.useEffect(() => {
    router.push({
      pathname: '/',
      query: { content: headerTitle },
    });
  }, [headerTitle]);

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  const selectItem = (title, id) => {
    setHeaderTitle(title);
    setListOpen(false);
  };

  const close = () => {
    setListOpen(false);
  };

  return (
    <Wrapper>
      <DropdownHead toggleList={toggleList} headerTitle={headerTitle} listOpen={listOpen} />

      {
        listOpen &&
          <Options list={list} selectItem={selectItem} />
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;
  font-size: 1.6rem;
  user-select: none;
  margin: 0 auto;
`;
