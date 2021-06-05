import React from 'react';

import styles from './Main.module.scss';

/* COMPONETS */
import Hero from '../../components/Hero/Hero';
import AboutMe from '../../components/AboutMe/AboutMe';

export default function Index() {
  return (
    <div className={styles.container}>
      <Hero />
      <AboutMe />
    </div>
  );
}
