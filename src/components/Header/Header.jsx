import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { ReactComponent as Logo } from '../../common/Logo.svg';

/* SUB-COMPONENTS */
import Navigation from '../Navigation/Navigation';
import { IconRoute } from '../Links/Links';

import styles from './Header.module.scss';

export default function Sidemenu() {
  const [shouldHide, setShouldHide] = useState(window.pageYOffset > 250);
  function handleScroll() {
    setShouldHide(window.pageYOffset > 250);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <header className={cn({ [styles.hidden]: shouldHide })}>
      <div className={styles.leftSide}>
        <IconRoute route="/" title="Home" aria-label="Home">
          <Logo className={styles.logo} />
        </IconRoute>
      </div>
      <div className={styles.rightSide}>
        <Navigation />
      </div>
    </header>
  );
}
