import React from 'react';
import Typist from 'react-typist';

import styles from './Hero.module.scss';
import './cursor.scss';

export default function Hero() {
  const email = process.env.REACT_APP_EMAIL;

  return (
    <div className={styles.container}>
      <div className={styles.intro}>Hello, my name is</div>
      <Typist
        className={styles.name}
        delay={1500}
        cursor={{
          show: true,
          blink: true,
          hideWhenDone: true,
          hideWhenDoneDelay: 3500,
        }}
      >
        <Typist.Delay ms={650} />
        Thanos Theodosou
        <Typist.Backspace count={2} delay={150} />
        iou.
      </Typist>
      <p className={styles.introduction}>
        I am a Backend engineer based in Athens with a knack for solving
        difficult problems. Currently, I am an engineer at
        <a href="https://thinkdesquared.com/"> Desquared </a>
        focused on making online shopping more accessible to consumers and
        easier to manage.
      </p>
      <div className={styles.contact}>
        <a href={`mailto:${email}`}>Get in touch</a>
      </div>
    </div>
  );
}
