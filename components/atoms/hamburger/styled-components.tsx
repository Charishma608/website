/* eslint-disable import/prefer-default-export */
import { styled } from 'baseui';

export const StyledHamburgerBlock = styled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '24px',
  position: 'relative',
  width: '32px',
  height: '32px',
  padding: 0,
  backgroundColor: $theme.colors.primaryA,
  transitionProperty: 'all',
  transitionDuration: '.2s',
  cursor: 'pointer',
  [$theme.mediaQuery.small]: { display: 'flex' },
  [$theme.mediaQuery.medium]: { display: 'flex' },
  [$theme.mediaQuery.large]: { display: 'none' },
}));

export const StyledLineOne = styled('div', ({ $theme }) => ({
  transform: 'translate3d(0px, -3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  transformStyle: 'preserve-3d',
  position: 'absolute',
  width: '16px',
  height: '2px',
  backgroundColor: $theme.colors.mono100,
}));

export const StyledLineTwo = styled('div', ({ $theme }) => ({
  transform: 'translate3d(0px, 3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  transformStyle: 'preserve-3d',
  position: 'absolute',
  width: '16px',
  height: '2px',
  backgroundColor: $theme.colors.mono100,
}));
