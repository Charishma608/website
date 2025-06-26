import React from 'react';
import { styled, useStyletron } from 'baseui';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';

const FooterContainer = styled('footer', {
  width: '100%',
  backgroundColor: 'white',
  padding: '32px 0',
  borderTop: '1px solid #E5E7EB',
});

const Container = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '32px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '24px',
  },
});

const NavLinks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  maxHeight: '120px',
  gap: '0 64px',
  '@media (max-width: 768px)': {
    maxHeight: 'none',
    gap: '8px',
  },
});

const Newsletter = styled('div', {
  flex: '1',
  minWidth: '280px',
  maxWidth: '400px',
  '@media (max-width: 768px)': {
    width: '100%',
    maxWidth: 'none',
  },
});

const BottomSection = styled('div', {
  maxWidth: '1200px',
  margin: '32px auto 0',
  padding: '24px 24px 0',
  borderTop: '1px solid #E5E7EB',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media (max-width: 480px)': {
    flexDirection: 'column',
    gap: '16px',
    textAlign: 'center',
  },
});

const Footer = () => {
  const [value, setValue] = React.useState('');
  const [css] = useStyletron();

  const linkStyles = {
    color: '#4B5563',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    padding: '8px 0',
    ':hover': {
      color: '#111827',
    },
  } as const;

  const socialLinkStyles = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#E5E7EB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6B7280',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: '#D1D5DB',
    },
  } as const;

  return (
    <FooterContainer>
      <Container>
        {/* Logo */}
        <div className={css({
          display: 'flex',
          alignItems: 'center',
          fontSize: '20px',
          fontWeight: 700,
          marginRight: '64px',
        })}>
          Skillex
          <span className={css({
            display: 'inline-block',
            width: '6px',
            height: '6px',
            backgroundColor: '#10B981',
            marginLeft: '4px',
            borderRadius: '50%',
          })} />
        </div>

        {/* Navigation Links */}
        <NavLinks>
          <a href="#" className={css(linkStyles)}>Our Services</a>
          <a href="#" className={css(linkStyles)}>AI in Industry</a>
          <a href="#" className={css(linkStyles)}>Case Studies</a>
          <a href="#" className={css(linkStyles)}>About Us</a>
        </NavLinks>

        {/* Newsletter */}
        <Newsletter>
          <div className={css({
            display: 'flex',
            gap: '8px',
            width: '100%',
          })}>
            <Input
              value={value}
              onChange={e => setValue(e.currentTarget.value)}
              placeholder="Enter your email"
              overrides={{
                Root: {
                  style: {
                    width: '100%',
                    backgroundColor: 'white',
                    borderColor: '#E5E7EB',
                    ':hover': {
                      borderColor: '#9CA3AF',
                    },
                  },
                },
                Input: {
                  style: {
                    backgroundColor: 'transparent',
                    fontSize: '14px',
                    '::placeholder': {
                      color: '#9CA3AF',
                    },
                  },
                },
              }}
            />
            <Button
              overrides={{
                BaseButton: {
                  style: {
                    backgroundColor: '#10B981',
                    color: 'white',
                    ':hover': {
                      backgroundColor: '#059669',
                    },
                    whiteSpace: 'nowrap',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                  },
                },
              }}
            >
              GO
            </Button>
          </div>
        </Newsletter>
      </Container>

      {/* Bottom Section */}
      <BottomSection>
        <div className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#9CA3AF',
          fontSize: '12px',
        })}>
          <div className={css({
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#374151',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          })} />
          <span>2021 Halo Lab. All rights reserved</span>
        </div>
        <div className={css({
          display: 'flex',
          gap: '12px',
        })}>
          {['dribbble', 'twitter', 'instagram', 'youtube'].map((social) => (
            <a
              key={social}
              href="#"
              className={css({
                ...socialLinkStyles,
                width: '28px',
                height: '28px',
                fontSize: '12px',
              })}
            />
          ))}
        </div>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;
