import React from 'react';
import styled from 'styled-components';
import { NavLink, NavLinkWithChildren } from './components';

const links = [
  {
    title: 'Modules',
    children: [
      'Block',
      'Grid',
      'Flex',
      'Typography',
      'Imagery',
      'Generator'
    ]
  },
  { title: 'Extension' },
  { title: 'Variants' }
]

export function Nav() {
  return (
    <NavContainer>
      {links.map(({ title, children }, i) => {
        const hasChildren = !!children;

        if (hasChildren) {
          return (
            <NavLinkWithChildren parentName={title} navChildren={children} />
          )
        }

        return (
          <NavLink
            name={title}
            query={{ content: title }}
            key={`navlink-${i}-${title}`}
          />
        );
      })}
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  text-align: center;
`;
