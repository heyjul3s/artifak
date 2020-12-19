export type MobileNavContextType = {
  panelOpen: boolean;
  selectedNavOption: string;
  viewIndex: number;
  setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedNavOption: React.Dispatch<React.SetStateAction<string>>;
  setViewIndex: React.Dispatch<React.SetStateAction<number>>;
};
