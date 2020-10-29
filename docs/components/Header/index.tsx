import React from 'react';
import styled from 'styled-components';
import { Dropdown } from '../Dropdown/Dropdown';
import { Brand } from './Brand';
import { Tagline } from './Tagline';

const links = [
  {
    id: 'home',
    title: 'Home',
    selected: false,
    key: 'modules'
  },
  {
    id: 'block',
    title: 'Block',
    selected: false,
    key: 'modules'
  },
  {
    id: 'grid',
    title: 'Grid',
    selected: false,
    key: 'modules'
  },
  {
    id: 'flex',
    title: 'Flex',
    selected: false,
    key: 'modules'
  },
  {
    id: 'typography',
    title: 'Typography',
    selected: false,
    key: 'modules'
  },
  {
    id: 'imagery',
    title: 'Imagery',
    selected: false,
    key: 'modules'
  },
  {
    id: 'generator',
    title: 'Generator',
    selected: false,
    key: 'modules'
  }
  // {
  //   id: 'variants',
  //   title: 'Variants',
  //   selected: false,
  //   key: 'location'
  // },
];

export function Header() {
  return (
    <HeaderContainer>
      <Brand />
      <Tagline />
      <Dropdown title={'Home'} list={links} />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  padding: 2em 0 0;

  ${({ theme }) => `
    @media(min-width: ${theme.breakpoints[0]}) {
      padding: 5em 0 0;
    }
  `}
`;
