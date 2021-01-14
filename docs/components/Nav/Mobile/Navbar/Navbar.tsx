import { useContext } from 'react';
import { useRouter } from 'next/router';
import { links } from '../../constants';
import { MobileNavContext } from '../context';
import * as Icons from '../icons';
import { NavMenuContainer, NavCategoryButton, NavCategory } from './styles';

export function Navbar() {
  const router = useRouter();
  const { setPanelOpen, setViewIndex } = useContext(MobileNavContext);

  const onClickNavCategory = (navOption: string, navIndex: number) => (
    e: React.SyntheticEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (navOption !== 'Home') {
      setPanelOpen(true);
      setViewIndex(navIndex);
    } else {
      setPanelOpen(false);
      router.push(links.Home.route);
    }
  };

  return (
    <NavMenuContainer>
      {Object.keys(links).map(key => {
        const Icon = Icons[`${links[key].name}Icon`];

        return (
          <NavCategory
            key={`${key}-button`}
            onClick={onClickNavCategory(
              links[key].name,
              links[key].mobileNavIndex
            )}
          >
            {!!Icon && <Icon />}
            <NavCategoryButton>{links[key].name}</NavCategoryButton>
          </NavCategory>
        );
      })}
    </NavMenuContainer>
  );
}
