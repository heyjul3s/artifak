import React from 'react';
import { ArtifakTypeLogo } from '../../../assets/ArtifakTypeLogo';
import { NavTopContainer, NavTopMenu, NavTopLink } from './styles';

export function NavTop() {
  return (
    <NavTopContainer>
      <ArtifakTypeLogo />
      <NavTopMenu>
        <NavTopLink href="https//github.com/heyjul3s/artifak">
          Github
        </NavTopLink>
        <NavTopLink href="/docs">Docs</NavTopLink>
      </NavTopMenu>
    </NavTopContainer>
  );
}
