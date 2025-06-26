import React from 'react';
import { gsap } from 'gsap';
import GlobalContext from '../../../contexts/global.context';
import { StyledHamburgerBlock, StyledLineOne, StyledLineTwo } from './styled-components';

function Hamburger() {
  const { drawerOpen } = React.useContext(GlobalContext);
  const [menuTl] = React.useState(gsap.timeline({ paused: true }));

  React.useEffect(() => {
    if (drawerOpen) {
      menuTl.to('.line-one', { duration: 0.2, y: 0, rotation: 45 })
        .to('.line-two', { duration: 0.2, y: 0, rotation: -45 }, 0);
    } else {
      menuTl.to('.line-one', { duration: 0.2, y: 0, rotation: 45 })
        .to('.line-two', { duration: 0.2, y: 0, rotation: -45 }, 0).reverse();
    }
  }, [menuTl, drawerOpen]);

  const animate = () => menuTl.reversed(!menuTl.reversed());

  return (
    <GlobalContext.Consumer>
      {({ toggleDrawer }) => {
        const onClick = () => {
          animate();
          toggleDrawer();
        };

        return (
          <StyledHamburgerBlock
            role="button"
            aria-label="Menu Button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={onClick}
          >
            <StyledLineOne className="line-one" />
            <StyledLineTwo className="line-two" />
          </StyledHamburgerBlock>
        );
      }}
    </GlobalContext.Consumer>
  );
}

export default Hamburger;
