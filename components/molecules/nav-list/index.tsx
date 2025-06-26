import React from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { StyledNav, StyledNavLink } from './styled-components';
import GlobalContext from '../../../contexts/global.context';

gsap.registerPlugin(ScrollToPlugin);

function NavList() {
  const { closeDrawer, links } = React.useContext(GlobalContext);
  const [id, setId] = React.useState('#find-position');
  const timeline = gsap.timeline();

  const updateNavLink = ({ url }: { url: string }) => {
    timeline.addLabel(url).to(window, {
      duration: 1.6,
      ease: 'power3.out',
      scrollTo: { y: url, offsetY: 80 },
    });
  };

  return (
    <StyledNav>
      {links.map((link) => (
        <StyledNavLink
          key={link.id}
          $isActive={link.url === id}
          onClick={() => {
            closeDrawer();
            setId(link.url);
            updateNavLink({ url: link.url });
          }}
        >
          {link.name}
        </StyledNavLink>
      ))}
    </StyledNav>

  );
}

export default NavList;
