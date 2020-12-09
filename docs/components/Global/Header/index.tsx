import React from 'react';
import styled from 'styled-components';
import { Dropdown } from '../Dropdown/Dropdown';
import { Brand } from './Brand';
import { Tagline } from './Tagline';

const links = [
  {
    id: 'home',
    title: 'Home',
    component: 'Home',
    selected: false,
    key: 'modules'
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    component: 'GettingStarted',
    selected: false,
    key: 'modules'
  },
  {
    id: 'block',
    title: 'Block',
    component: 'Block',
    selected: false,
    key: 'modules'
  },
  {
    id: 'grid',
    title: 'Grid',
    component: 'Grid',
    selected: false,
    key: 'modules'
  },
  {
    id: 'flex',
    title: 'Flex',
    component: 'Flex',
    selected: false,
    key: 'modules'
  },
  {
    id: 'typography',
    title: 'Typography',
    component: 'Typography',
    selected: false,
    key: 'modules'
  },
  {
    id: 'imagery',
    title: 'Imagery',
    component: 'Imagery',
    selected: false,
    key: 'modules'
  },
  {
    id: 'generator',
    title: 'Generator',
    component: 'Generator',
    selected: false,
    key: 'modules'
  },
  {
    id: 'media',
    title: 'Media',
    component: 'Media',
    selected: false,
    key: 'modules'
  },
  {
    id: 'variants',
    title: 'Variants',
    component: 'Variants',
    selected: false,
    key: 'modules'
  },
  {
    id: 'customisation',
    title: 'Customisation',
    component: 'Customisation',
    selected: false,
    key: 'modules'
  }
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
