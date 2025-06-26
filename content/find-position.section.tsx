import React from 'react';
import { gsap } from 'gsap';
import { HERO_PERSONS } from '../lib/hero-persons';
import { HeroPersonsDiv } from './styled-components';
import Section from '../components/atoms/section';
import HeroHeader from '../components/atoms/hero-header';
import EmailInput from '../components/molecules/email-input';
import HeroPersonCard from '../components/molecules/hero-person-card';

function FindPositionSection() {
  React.useEffect(() => {
    gsap.fromTo('.hero-persons', { opacity: 0, x: -400 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo('.hero-header-form', { opacity: 0, y: 100 }, {
      opacity: 1, y: 0, duration: 1.1, delay: 0.5,
    });
  });

  return (
    <Section id="find-position" paddingTop={['100px', '120px', '120px']}>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            WebkitBoxPack: 'justify',
            justifyContent: 'space-between',
            WebkitBoxAlign: 'stretch',
            alignItems: 'stretch',
          }}
        >
          <div
            className="hero-header-form"
            style={{
              paddingBottom: '56px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              zIndex: 1,
            }}
          >
            <HeroHeader />
            <form
              id="email-form"
              name="email-form"
              aria-label="Email Form"
              method="get"
            >
              <EmailInput />
            </form>
          </div>
          <div style={{ flex: 1 }}>
            <HeroPersonsDiv className="hero-persons">
              {HERO_PERSONS.map((person, index) => (
                <HeroPersonCard
                  key={person.id}
                  index={index}
                  person={person}
                />
              ))}
            </HeroPersonsDiv>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FindPositionSection;
