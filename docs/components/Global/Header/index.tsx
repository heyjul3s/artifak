import React from 'react';
import { Brand } from '../Brand';
import { Tagline } from '../Tagline';
import { HeaderContainer } from './styles';
import { GetStartedButton } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Brand />
      <Tagline />
      <GetStartedButton href="/docs">Get Started</GetStartedButton>
    </HeaderContainer>
  );
}
