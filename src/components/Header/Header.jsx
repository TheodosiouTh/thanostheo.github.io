import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { ReactComponent as Logo } from '../../global/Logo.svg';

/* SUB-COMPONENTS */
import Navigation from '../Navigation/Navigation';

import styles from './Header.module.scss';

export default function Sidemenu() {
  const [shouldHide, setShouldHide] = useState(window.pageYOffset > 250);
  function handleScroll() {
    console.log(window.pageYOffset);
    setShouldHide(window.pageYOffset > 250);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <header className={cn({ [styles.hidden]: shouldHide })}>
      <div className={styles.leftSide}>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.rightSide}>
        <Navigation />
      </div>
    </header>
  );
}
