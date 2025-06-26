import React from 'react';
import Header from '../organisms/header';
import GlobalContext, { GlobalType } from '../../contexts/global.context';
import Drawer from '../organisms/drawer';
import Footer from '../footer';

type LayoutProps = {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const globalValue: GlobalType = React.useMemo<GlobalType>(() => ({
    drawerOpen: isOpen,
    toggleDrawer,
    closeDrawer: () => setIsOpen(false),
    links: [
      { id: 0, name: 'Our Services', url: '#find-passion' },
      { id: 1, name: 'AI in Industry', url: '#categories' },
      { id: 2, name: 'Case Studies', url: '#skills' },
      { id: 3, name: 'About Us', url: '#customer' },
    ],
  }), [isOpen, toggleDrawer]);

  return (
    <GlobalContext.Provider value={globalValue}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Drawer />
        <div style={{ flex: 1 }}>
          <main style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          {children}
        </main>
        </div>        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}

export default Layout;
