/* eslint-disable import/prefer-default-export */
import { styled } from 'baseui';

export const StyledHeader = styled('header', ({ $theme }) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 90,
  maxWidth: '1280px',
  width: '100%',
  margin: '0px auto',
  display: 'block',
  backgroundColor: $theme.colors.mono100,
  [$theme.mediaQuery.small]: { padding: '20px 24px' },
  [$theme.mediaQuery.medium]: { padding: '1.714rem 1.714rem' },
  [$theme.mediaQuery.large]: { padding: '2.375rem 0px' },
}));

export const StyledHeaderBlock = styled('div', () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledLogoBlock = styled('div', ({ $theme }) => ({
  [$theme.mediaQuery.small]: { minWidth: 'auto' },
  [$theme.mediaQuery.medium]: { minWidth: 'auto' },
  [$theme.mediaQuery.large]: { minWidth: '250px' },
}));

export const StyledNavBlock = styled('div', ({ $theme }) => ({
  justifyItems: 'flex-start',
  width: '100%',
  [$theme.mediaQuery.small]: { display: 'none' },
  [$theme.mediaQuery.medium]: { display: 'none' },
  [$theme.mediaQuery.large]: { display: 'flex' },
}));

export const StyledActionsBlock = styled('div', ({ $theme }) => ({
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
  [$theme.mediaQuery.small]: { display: 'none' },
  [$theme.mediaQuery.medium]: { display: 'none' },
  [$theme.mediaQuery.large]: { display: 'flex' },
}));
