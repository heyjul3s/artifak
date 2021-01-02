import React from 'react';
import { AnchorLink } from '../../AnchorLink';
import { Brand } from '../../Global/Brand/Brand';
import { Tagline } from '../../Global/Tagline/Tagline';
import { NavContainer, ListItem } from './styles';
import { DesktopNavLink } from './DesktopNavLink';
import { links } from '../constants';

export function DesktopNav() {
  return (
    <aside>
      <AnchorLink href="/">
        <Brand position="flex-start" />
      </AnchorLink>
      <Tagline align="left" />
      <NavContainer>
        {Object.keys(links).map((key, i) => {
          return (
            <ListItem key={`link-${links[key].name}-${i}`}>
              <DesktopNavLink
                children={links[key].children}
                link={links[key].route}
                name={links[key].name}
              />
            </ListItem>
          );
        })}
      </NavContainer>
    </aside>
  );
}
