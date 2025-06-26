import React from 'react';
import { useStyletron } from 'baseui';

type SectionType = {
    id: string,
    children: React.ReactNode,
    paddingTop?: any,
    paddingBottom?: any,
    style?: React.CSSProperties | undefined
};

function Section(props: SectionType) {
  const {
    id, children, paddingBottom, paddingTop, style,
  } = props;

  const [css, theme] = useStyletron();

  return (
    <section
      id={id}
      style={style}
      className={css({
        display: 'block',
        [theme.mediaQuery.small]: {
          paddingTop: paddingTop.length !== 0 ? paddingTop[0] : '36px',
          paddingRight: '24px',
          paddingBottom: paddingBottom?.length !== 0 ? paddingBottom[0] : '36px',
          paddingLeft: '24px',
        },
        [theme.mediaQuery.medium]: {
          paddingTop: paddingTop.length !== 0 ? paddingTop[1] : '64px',
          paddingRight: '1.714rem',
          paddingBottom: paddingBottom?.length !== 0 ? paddingBottom[1] : '64px',
          paddingLeft: '1.714rem',
        },
        [theme.mediaQuery.large]: {
          paddingTop: paddingTop.length !== 0 ? paddingTop[2] : '64px',
          paddingRight: '0px',
          paddingBottom: paddingBottom?.length !== 0 ? paddingBottom[2] : '64px',
          paddingLeft: '0px',
        },
      })}
    >
      {children}
    </section>
  );
}

Section.defaultProps = {
  paddingTop: [] || '',
  paddingBottom: [] || '',
  style: {},
};

export default Section;
