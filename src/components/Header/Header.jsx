import React from 'react';

// TEMP LOGO
import Logo from '@material-ui/icons/AddCircleOutline';

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
