import React from 'react';
import NavLinkType from '../lib/na-link-type';

export type GlobalType = {
  drawerOpen: boolean,
  toggleDrawer: () => void,
  closeDrawer: () => void,
  links: NavLinkType[],
}

const GlobalContext: React.Context<GlobalType> = React.createContext<GlobalType>({
  drawerOpen: false,
  toggleDrawer: () => {},
  closeDrawer: () => {},
  links: [],
});

export default GlobalContext;
