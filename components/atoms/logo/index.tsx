import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from 'baseui';

export const StyledLogoLink = styled('div', ({ $theme }) => ({
  maxWidth: '100%',
  display: 'inline-block',
  backgroundColor: 'transparent',
  WebkitTransition: '.3s',
  transition: '.3s',
  textDecoration: 'underline',
  [$theme.mediaQuery.small]: { maxWidth: '82px' },
  [$theme.mediaQuery.medium]: { maxWidth: '100%' },
  [$theme.mediaQuery.large]: { maxWidth: '100%' },
}));

function Logo() {
  return (
    <Link href="/" passHref>
      <StyledLogoLink>
        <Image
          src="/logo .png"

          alt="Skillex Logo"
          width="130px"
          height="100px"
          style={{ cursor: 'pointer',marginTop:'-40px' }}
        />
      </StyledLogoLink>
    </Link>
  );
}

export default Logo;
