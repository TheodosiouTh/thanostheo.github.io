import React from 'react';

import { ReactComponent as Logo } from '../../global/Logo.svg';

/* SUB-COMPONENTS */
import Navigation from '../Navigation/Navigation';

import styles from './Header.module.scss';

export default function Sidemenu() {
  return (
    <header
      className={styles.container}
    >
      <div className={styles.leftSide}>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.rightSide}>
        <Navigation />
      </div>
    </header>
  );
}
