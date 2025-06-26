import React from 'react';
import Link from 'next/link';
import { useStyletron } from 'baseui';

function LoginButton() {
  const [css, theme] = useStyletron();
  return (
    <Link href="/">
      <a className={css({
        display: 'inline-block',
        color: theme.colors.primaryA,
        fontSize: '1rem',
        lineHeight: '22px',
        boxShadow: 'inset 0 0 0 0 #97c680',
        transitionProperty: 'box-shadow',
        transitionDuration: theme.animation.timing700,
        ':hover': { boxShadow: 'inset 0 -9px 0 0 #97c680' },
        [theme.mediaQuery.small]: {
          marginRight: '16px',
          textAlign: 'center',
          border: '1px solid rgba(30,30,47,.2)',
          backgroundColor: 'transparent',
          paddingTop: '10px',
          paddingRight: '30px',
          paddingBottom: '10px',
          paddingLeft: '30px',
          borderRadius: '100px',
          width: '100%',
          minWidth: 'auto',
        },
        [theme.mediaQuery.medium]: {
          marginRight: '16px',
          textAlign: 'center',
          border: '1px solid rgba(30,30,47,.2)',
          backgroundColor: 'transparent',
          paddingTop: '10px',
          paddingRight: '30px',
          paddingBottom: '10px',
          paddingLeft: '30px',
          borderRadius: '100px',
          width: 'auto',
          minWidth: '160px',
        },
        [theme.mediaQuery.large]: {
          marginRight: '2.5rem',
          textAlign: 'center',
          border: 'none',
          backgroundColor: 'transparent',
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          borderRadius: 0,
          width: 'auto',
          minWidth: 'auto',
        },
      })}
      >
      
      </a>
    </Link>
  );
}

export default LoginButton;
