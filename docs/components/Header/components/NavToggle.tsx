import { NavToggleIcon } from '../styled';

type Props = {
  isOpenNavMenu: boolean;
  setIsOpenNavMenu: (isOpenNavMenu: boolean) => void;
};

export function NavToggle({ isOpenNavMenu, setIsOpenNavMenu }: Props) {
  const onClick = () => {
    setIsOpenNavMenu(!isOpenNavMenu);
  };

  return <NavToggleIcon onClick={onClick}></NavToggleIcon>;
}
