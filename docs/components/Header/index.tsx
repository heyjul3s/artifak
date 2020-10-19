import React from 'react';
import styled from 'styled-components';
import { Nav } from '../Nav/Nav';
import { Brand } from './Brand';
import { Tagline } from './Tagline';

export function Header() {
  return (
    <HeaderContainer>
      <Brand />
      <Tagline />
      <Nav />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  padding: 5em 0 0;
`