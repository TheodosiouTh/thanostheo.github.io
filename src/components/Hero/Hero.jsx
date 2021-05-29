import React from 'react';

import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        Hello, my name is
      </div>
      <div className={styles.title}>
        Thanos Theodosiou
      </div>
      <div className={styles.introduction}>
        I am a Software engineer based in Athens who specializes in
        developing exceptional Applications that help people stress less
        about mundane tasks and focus more on things that matter more.
        Currently, I am an engineer at
        <a href="https://thinkdesquared.com/"> Desquared </a>
        focused on making online shopping more accessible for consumers and easier
        to manage for store managers.
      </div>
      <a href="mail-to:thanosthd@gmail.com">Get in touch</a>
    </div>
  );
}
