import React from 'react';

import styles from './Main.module.scss';

/* COMPONETS */
import Hero from '../../components/Hero/Hero';

export default function Index() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
