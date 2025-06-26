import React from 'react';
import { ANCHOR, Drawer as BaseDrawer, SIZE } from 'baseui/drawer';
import { useStyletron } from 'baseui';
import GlobalContext from '../../../contexts/global.context';
import NavList from '../../molecules/nav-list';
import LoginButton from '../../atoms/login-button';
import FreeTrialButton from '../../atoms/free-trial-button';

function Drawer() {
  const { drawerOpen, closeDrawer } = React.useContext(GlobalContext);
  const [css, theme] = useStyletron();

  return (
    <BaseDrawer
      isOpen={drawerOpen}
      onClose={closeDrawer}
      autoFocus
      anchor={ANCHOR.top}
      size={SIZE.full}
      overrides={{
        Root: { style: () => ({ zIndex: 80 }) },
        DrawerBody: {
          style: ({
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
            paddingTop: '100px',
            paddingBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            width: '100%',
          }),
        },
        DrawerContainer: {
          style: ({ paddingRight: '24px', paddingLeft: '24px' }),
        },
      }}
    >
      <NavList />
      <div className={css({
        display: 'flex',
        width: '100%',
        paddingTop: '24px',
        borderTop: '1px solid rgba(30,30,47,.1)',
        alignItems: 'center',
        [theme.mediaQuery.small]: { justifyContent: 'space-between' },
        [theme.mediaQuery.medium]: { justifyContent: 'flex-start' },
        [theme.mediaQuery.large]: { justifyContent: 'flex-start' },
      })}
      >
        <LoginButton />
        <FreeTrialButton />
      </div>
    </BaseDrawer>
  );
}

export default Drawer;
