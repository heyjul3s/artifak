import React from 'react';
import { AnchorLink } from '../../AnchorLink';
import { ArtifakTypeLogo } from '../../../assets/ArtifakTypeLogo';
import { NavTopContainer, NavTopMenu, NavTopLink } from './styles';
import { MobileNavContext } from '../../Nav/Mobile/context';

export function NavTop() {
  const mobileNavContext = React.useContext(MobileNavContext);
  const panelOpen = !!mobileNavContext ? mobileNavContext.panelOpen : false;

  return (
    <NavTopContainer panelOpen={panelOpen}>
      <AnchorLink
        href="/"
        style={{
          display: 'flex'
        }}
      >
        <ArtifakTypeLogo />
      </AnchorLink>
      <NavTopMenu>
        <NavTopLink
          href="https://github.com/heyjul3s/artifak"
          openAsNewTab={true}
        >
          Github
        </NavTopLink>
        <NavTopLink href="/docs">Docs</NavTopLink>
      </NavTopMenu>
    </NavTopContainer>
  );
}
