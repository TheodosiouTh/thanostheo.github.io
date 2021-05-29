import React from 'react';

import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        Hello, my name is
      </div>
      <div className={styles.name}>
        Thanos Theodosiou.
      </div>
      <p className={styles.introduction}>
        I am a Software engineer based in Athens who specializes in
        developing exceptional server-side Applications.
        {' '}
        <br />
        Currently, I am an engineer at
        <a href="https://thinkdesquared.com/"> Desquared </a>
        focused on making online shopping more accessible to consumers and easier
        to manage for managers.
      </p>
      <div className={styles.contact}>
        <a href="mail-to:thanosthd@gmail.com">Get in touch</a>
      </div>
    </div>
  );
}
