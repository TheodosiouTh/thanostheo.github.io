import React from 'react';
import Typist from 'react-typist';

import styles from './Hero.module.scss';
import './cursor.scss';

export default function Hero() {
  const email = process.env.REACT_APP_EMAIL;

  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        Hello, my name is
      </div>
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
        I am a full stack engineer based in Athens who specializes in
        developing exceptional Applications.
        <br />
        Currently, I am an engineer at
        <a href="https://thinkdesquared.com/"> Desquared </a>
        focused on making online shopping more accessible to consumers and easier
        to manage for managers.
      </p>
      <div className={styles.contact}>
        <a href={`mailto:${email}`}>Get in touch</a>
      </div>
    </section>
  );
}
