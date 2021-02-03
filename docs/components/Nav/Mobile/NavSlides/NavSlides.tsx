import { useContext } from 'react';
import { useRouter } from 'next/router';
import { links } from '../../constants';
import { MobileNavContext } from '../context';

import {
  NavMenu,
  NavMenuPanel,
  CloseButtonContainer,
  MenuTitle,
  NavLink
} from './styles';

import { Slider } from './Slider/Slider';
import { CloseIcon } from '../../../../assets';

const navMenuVariants = {
  open: {
    y: 0,
    opacity: 0.95
  },
  closed: {
    y: '-100%',
    opacity: 0
  }
};

const closeMenuVariants = {
  open: {
    scale: 1
  },
  closed: {
    scale: 0
  }
};

export function NavSlides() {
  const router = useRouter();
  const { panelOpen, setPanelOpen, viewIndex, setViewIndex } = useContext(
    MobileNavContext
  );

  const navPanelContent = Object.keys(links).reduce((acc, key) => {
    if (!!links[key].children) {
      acc[key] = links[key].children;
    }

    return acc;
  }, {});

  const onClickLink = (route: string) => (e: React.SyntheticEvent) => {
    e.preventDefault();
    setPanelOpen(false);
    router.push(route);
  };

  const onClickCloseMenu = () => {
    setPanelOpen(false);
  };

  return (
    <NavMenu animate={panelOpen ? 'open' : 'closed'} variants={navMenuVariants}>
      <CloseButtonContainer
        onClick={onClickCloseMenu}
        animate={panelOpen ? 'open' : 'closed'}
        variants={closeMenuVariants}
      >
        <CloseIcon />
      </CloseButtonContainer>

      <Slider viewIndex={viewIndex} onChangeViewIndex={setViewIndex}>
        {Object.keys(navPanelContent).map(key => {
          return (
            <NavMenuPanel key={`${key}-menu`}>
              <MenuTitle>{key}</MenuTitle>
              {navPanelContent[key].map(({ route, name }) => {
                return (
                  <NavLink
                    key={`${key}-${name}-link`}
                    href={route}
                    onClick={onClickLink(route)}
                  >
                    {name}
                  </NavLink>
                );
              })}
            </NavMenuPanel>
          );
        })}
      </Slider>
    </NavMenu>
  );
}
