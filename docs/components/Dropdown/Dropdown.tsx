import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { DropdownHead, Options } from './components';

type Props = {
  title: string;
  list: ListItemProp[];
};

type ListItemProp = {
  id: string;
  title: string;
  component: string;
  selected: boolean;
  key: string;
};

export function Dropdown({ title = '', list = [] }: Props) {
  const router = useRouter();
  const [listOpen, setListOpen] = React.useState<boolean>(false);
  const [headerTitle, setHeaderTitle] = React.useState<string>('');
  const [page, setPage] = React.useState<string>('');

  React.useEffect(() => {
    setHeaderTitle(title);

  }, []);

  React.useEffect(() => {
    if (!!listOpen) {
      window.addEventListener('click', close);
    }

    return function cleanupListener() {
      window.removeEventListener('click', close);
    };
  }, [listOpen]);

  React.useEffect(() => {
    router.push({
      pathname: '/',
      query: { content: page }
    });
  }, [headerTitle]);

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  const selectItem = (title, id, component) => {
    setHeaderTitle(title);
    setPage(component);
    setListOpen(false);
  };

  const close = () => {
    setListOpen(false);
  };

  return (
    <Wrapper>
      <DropdownHead
        toggleList={toggleList}
        headerTitle={headerTitle}
        listOpen={listOpen}
      />

      {listOpen && <Options list={list} selectItem={selectItem} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  font-size: 1.6rem;
  user-select: none;
  margin: 0 auto;
`;
