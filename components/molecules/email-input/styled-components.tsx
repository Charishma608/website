/* eslint-disable import/prefer-default-export */

import { SharedProps } from 'baseui/input';
import { Override } from 'baseui/overrides';
import { styled } from 'baseui';

export const StyledGoLink = styled('a', (props) => ({
  fontWeight: 700,
  position: 'absolute',
  top: '0px',
  right: '0px',
  bottom: '0px',
  zIndex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgb(151, 198, 128)',
  color: 'rgb(30, 30, 47)',
  transitionProperty: 'all',
  transitionDuration: props.$theme.animation.timing300,
  transitionTimingFunction: 'ease',
  cursor: 'pointer',
  paddingTop: '9px',
  paddingRight: '15px',
  paddingBottom: '9px',
  paddingLeft: '15px',
  ':hover': { boxShadow: 'rgb(254, 186, 136) 0px -120px 0px 0px inset' },
  [props.$theme.mediaQuery.small]: { width: '86px', fontSize: '24px' },
  [props.$theme.mediaQuery.medium]: { width: '120px', fontSize: '34px' },
  [props.$theme.mediaQuery.large]: { width: '120px', fontSize: '34px' },
}));

export const StyledRoot: Override<SharedProps> = {
  style: () => ({
    position: 'relative',
    paddingRight: 0,
    zIndex: 1,
    width: '100%',
    borderTopWidth: '0px',
    borderRightWidth: '0px',
    borderBottomWidth: '0px',
    borderLeftWidth: '0px',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 46px 50px 0px',
    transitionProperty: 'all',
    transitionDuration: '0.5s',
    ':focus-within': {
      boxShadow: 'rgba(0, 0, 0, 0.15) 0px 46px 50px 0px',
      borderTopWidth: '0px',
      borderRightWidth: '0px',
      borderBottomWidth: '0px',
      borderLeftWidth: '0px',
    },
  }),
};

export const StyledInput: Override<SharedProps> = {
  style: (props) => ({
    backgroundColor: 'white',
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    [props.$theme.mediaQuery.small]: { fontSize: '16px' },
    [props.$theme.mediaQuery.medium]: { fontSize: '20px' },
    [props.$theme.mediaQuery.large]: { fontSize: '20px' },
  }),
};

export const StyledInputContainer: Override<SharedProps> = {
  style: (props) => ({
    paddingTop: '8px',
    paddingBottom: '8px',
    backgroundColor: 'white',
    transitionProperty: 'all',
    transitionDuration: props.$theme.animation.timing700,
    borderTopWidth: '1px',
    borderRightWidth: '1px',
    borderBottomWidth: '1px',
    borderLeftWidth: '1px',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: 'white',
    borderLeftColor: 'white',
    ':focus-within': {
      borderTopWidth: '1px',
      borderRightWidth: '1px',
      borderBottomWidth: '1px',
      borderLeftWidth: '1px',
      borderTopStyle: 'solid',
      borderRightStyle: 'solid',
      borderBottomStyle: 'solid',
      borderLeftStyle: 'solid',
      borderTopColor: 'rgb(151, 198, 128)',
      borderRightColor: 'rgb(151, 198, 128)',
      borderBottomColor: 'rgb(151, 198, 128)',
      borderLeftColor: 'rgb(151, 198, 128)',
    },
    [props.$theme.mediaQuery.small]: {
      fontSize: '16px',
      paddingRight: '32px',
      paddingLeft: '32px',
      height: '86px',
      width: 'auto',
    },
    [props.$theme.mediaQuery.medium]: {
      fontSize: '20px',
      paddingRight: '12px',
      paddingLeft: '50px',
      height: '120px',
      width: '450px',
    },
    [props.$theme.mediaQuery.large]: {
      fontSize: '20px',
      paddingRight: '12px',
      paddingLeft: '50px',
      height: '120px',
      width: '450px',
    },
  }),
};
