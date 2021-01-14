import { useState } from 'react';
import { MobileNavContext } from './context';
import { NavSlides } from './NavSlides';
import { Navbar } from './Navbar';
import { NavContainer } from './styles';

export function MobileNav() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [selectedNavOption, setSelectedNavOption] = useState('');
  const [viewIndex, setViewIndex] = useState(1);

  return (
    <MobileNavContext.Provider
      value={{
        panelOpen,
        setPanelOpen,
        selectedNavOption,
        setSelectedNavOption,
        viewIndex,
        setViewIndex
      }}
    >
      <NavContainer panelOpen={panelOpen}>
        <NavSlides />
        <Navbar />
      </NavContainer>
    </MobileNavContext.Provider>
  );
}
