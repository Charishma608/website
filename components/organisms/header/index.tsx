import React from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Hamburger from '../../atoms/hamburger';
import NavList from '../../molecules/nav-list';
import Logo from '../../atoms/logo';
import {
  StyledActionsBlock,
  StyledHeader,
  StyledHeaderBlock,
  StyledLogoBlock,
  StyledNavBlock,
} from './styled-components';
import LoginButton from '../../atoms/login-button';
import FreeTrialButton from '../../atoms/free-trial-button';

gsap.registerPlugin(ScrollTrigger);

function Header() {
  React.useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#find-position',
        endTrigger: '#find-position',
        start: '120px top',
        onEnterBack: () => tl.reverse(),
        onRefresh: () => tl.paused(),
        onLeave: () => tl.reverse(),
      },
    });

    gsap.fromTo(
      '.header',
      { y: -200, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, delay: 0.15,
      },
    );
    tl.to('.header', { y: '-=200', duration: 0.8, ease: 'power2.in' });
  });

  return (
    <StyledHeader className="header">
      <StyledHeaderBlock>
        <StyledLogoBlock>
          <Logo />
        </StyledLogoBlock>
        <StyledNavBlock>
          <NavList />
        </StyledNavBlock>
        <StyledActionsBlock>
          <LoginButton />
          <FreeTrialButton />
        </StyledActionsBlock>
        <Hamburger />
      </StyledHeaderBlock>
    </StyledHeader>
  );
}

export default Header;
