import React from 'react';
import { Brand } from '../Global/Brand/Brand';
import { Tagline } from '../Global/Tagline/Tagline';
import { NavContainer, ListItem } from './styles';
import { DesktopNavLink } from './DesktopNavLink';
import { links } from './constants';

export function DesktopNav() {
  return (
    <aside>
      <Brand position="flex-start" />
      <Tagline align="left" />
      <NavContainer>
        {links.map(({ children, route, name }, i) => {
          return (
            <ListItem>
              <DesktopNavLink children={children} link={route} name={name} />
            </ListItem>
          );
        })}
      </NavContainer>
    </aside>
  );
}
