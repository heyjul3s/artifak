export type LinkItem = {
  route?: string;
  name: string;
  component: string;
};

export type LinkItems = Array<
  {
    children?: LinkItem[];
  } & LinkItem
>;

export type LinkProps = {
  hasChildren: boolean;
};

export type DesktopNavLinkProps = {
  children;
  link;
  name;
};