import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useStyletron } from 'baseui';
import { HeroPerson, HeroPersonContainer } from './styled-components';
import { HeroPersonType } from '../../../lib/hero-persons';

function HeroPersonCard(props: { index: number, person: HeroPersonType }) {
  const { index, person } = props;
  const [css, theme] = useStyletron();
  const list = [0, 1, 2];

  const targets = list.filter((n) => n !== index);

  const onMouseEnter = () => {
    gsap.to(`.person${index}`, { width: '58%' });
    gsap.to([`.person${targets[0]}`, `.person${targets[1]}`], { width: '21%' });
    gsap.to(`#titleDiv${index}`, { opacity: 1, duration: 0.6 });
    gsap.to([`#titleDiv${targets[0]}`, `#titleDiv${targets[1]}`], { opacity: 0, duration: 0.6 });
    gsap.to(`#box${index}`, { x: -100, opacity: 0, duration: 0.5 });
  };

  const onMouseLeave = () => {
    gsap.to('.person0', { width: '58%' });
    gsap.to(['.person1', '.person2'], { width: '21%' });
    gsap.to('#titleDiv0', { opacity: 1, duration: 0.6 });
    gsap.to(['#titleDiv1', '#titleDiv2'], { opacity: 0, duration: 0.6 });
    gsap.to(`#box${index}`, { x: 0, opacity: 1, duration: 0.5 });
  };

  return (
    <HeroPerson
      className={`person${index}`}
      style={{ width: index === 0 ? '58%' : '21%' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <HeroPersonContainer>
        <Image
          src={person.imageUrl}
          alt={person.imageAlt}
          layout="fill"
          objectFit="cover"
          priority={index === person.id}
        />
        <div className={css({
          position: 'absolute',
          zIndex: 2,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          backgroundImage: '-webkit-gradient(linear,left top,left bottom,color-stop(50%,transparent),to(rgba(0,0,0,.8)))',
          color: '#fff',
        })}
        >
          <div
            id={`titleDiv${index}`}
            className={css({
              opacity: index === 0 ? 1 : 0,
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              [theme.mediaQuery.small]: { paddingBottom: '40px', paddingLeft: index === 0 ? '90px' : '40px' },
              [theme.mediaQuery.medium]: { paddingBottom: '75px', paddingLeft: index === 0 ? '90px' : '40px' },
              [theme.mediaQuery.large]: { paddingBottom: '75px', paddingLeft: index === 0 ? '90px' : '40px' },
            })}
          >
            <h1 className={css({
              margin: 0,
              maxWidth: '150px',
              maxHeight: '100%',
              height: 'auto',
              width: '100%',
              lineHeight: '36px',
              fontWeight: 500,
              [theme.mediaQuery.small]: { fontSize: '30px' },
              [theme.mediaQuery.medium]: { fontSize: '36px' },
              [theme.mediaQuery.large]: { fontSize: '30px' },
            })}
            >
              {person.title}
            </h1>
            <h2 className={css({
              maxWidth: '150px',
              maxHeight: '100%',
              height: 'auto',
              width: '100%',
              lineHeight: '25px',
              textAlign: 'center',
              fontWeight: 500,
              margin: 0,
              [theme.mediaQuery.small]: { fontSize: '30px' },
              [theme.mediaQuery.medium]: { fontSize: '36px' },
              [theme.mediaQuery.large]: { fontSize: '50px' },
            })}
            >
              {person.numberOfTopics}
              <br />
              <span className={css({
                fontSize: '14px',
                textTransform: 'uppercase',
              })}
              >
                Topics
              </span>
            </h2>
          </div>
          <div
            id={`box${index}`}
            className={css({
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: 3,
              height: '100%',
              // paddingTop: '9px',
              // paddingRight: '15px',
              paddingBottom: '60px',
              paddingLeft: '15px',
              marginBottom: '56px',
              marginLeft: '-20px',
              display: index === 0 ? 'none' : 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(30, 30, 47)',
              [theme.mediaQuery.small]: { width: '86px', height: '86px', fontSize: '24px' },
              [theme.mediaQuery.medium]: { width: '120px', height: '120px', fontSize: '34px' },
              [theme.mediaQuery.large]: { width: '120px', height: '120px', fontSize: '34px' },
            })}
          >
            <h1 className={css({
              margin: 0,
              height: 'auto',
              width: '100%',
              lineHeight: 1,
              fontWeight: 500,
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-90deg) skew(0deg, 0deg)',
              [theme.mediaQuery.small]: { fontSize: '30px' },
              [theme.mediaQuery.medium]: { fontSize: '36px' },
              [theme.mediaQuery.large]: { fontSize: '30px' },
            })}
            >
              {person.category}
            </h1>
          </div>
        </div>
      </HeroPersonContainer>
    </HeroPerson>
  );
}

HeroPersonCard.propTypes = {};

export default HeroPersonCard;
