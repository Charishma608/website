/* eslint-disable import/prefer-default-export */
import { styled } from 'baseui';

export const StyledNav = styled('nav', ({ $theme }) => ({
  [$theme.mediaQuery.small]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%',
  },
  [$theme.mediaQuery.medium]: {
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  [$theme.mediaQuery.large]: {
    paddingTop: 0,
    display: 'block',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
}));

export const StyledNavLink = styled('a', ({ $theme, $isActive }:any) => ({
  color: $theme.colors.mono800,
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  lineHeight: '22px',
  boxShadow: $isActive ? 'inset 0 -9px 0 0 #97c680' : 'inset 0 0 0 0 #97c680',
  transitionProperty: 'box-shadow',
  transitionDuration: $theme.animation.timing700,
  ':hover': { boxShadow: 'inset 0 -9px 0 0 #97c680' },
  [$theme.mediaQuery.small]: {
    marginRight: 0,
    textAlign: 'left',
    marginBottom: '-1px',
    paddingTop: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid rgba(30,30,47,.1)',
    display: 'block',
    width: '100%',
    ':last-child': { borderBottom: '1px solid rgba(30,30,47,.0)' },
  },
  [$theme.mediaQuery.medium]: {
    marginRight: 0,
    textAlign: 'left',
    display: 'block',
    marginBottom: '-1px',
    paddingTop: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid rgba(30,30,47,.1)',
    width: '100%',
    ':last-child': { borderBottom: '1px solid rgba(30,30,47,.0)' },
  },
  [$theme.mediaQuery.large]: {
    marginRight: '1.5rem',
    textAlign: 'center',
    display: 'inline-block',
    marginBottom: 0,
    paddingTop: 0,
    paddingBottom: 0,
    borderBottom: 'none',
    width: 'auto',
  },
}));
