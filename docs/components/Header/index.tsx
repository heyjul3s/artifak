import React from 'react';
import styled from 'styled-components';
import { Brand } from './Brand';
import { Tagline } from './Tagline';

export function Header() {
  return (
    <HeaderContainer>
      <Brand />
      <Tagline />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  padding: 3em 0 0;
`