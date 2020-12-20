export type LinkItem = {
  route?: string;
  name: string;
  component: string;
};

export type LinkItems = Record<
  string,
  {
    children?: LinkItem[];
    mobileNavIndex?: number;
  } & LinkItem
>;
