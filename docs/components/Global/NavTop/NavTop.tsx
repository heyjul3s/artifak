import React from 'react';
import { NavTopContainer, NavTopMenu, NavTopLink } from './styles';

export function NavTop() {
  return (
    <NavTopContainer>
      <NavTopMenu>
        <NavTopLink href="https//github.com/heyjul3s/artifak">
          Github
        </NavTopLink>
        <NavTopLink href="/docs">Docs</NavTopLink>
      </NavTopMenu>
    </NavTopContainer>
  );
}
