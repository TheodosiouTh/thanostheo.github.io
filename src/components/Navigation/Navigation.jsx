import React, { lazy, useState, Suspense } from 'react';
import cn from 'classnames';

/* SUB-COMPONENTS */
import { IconButton } from '@material-ui/core';
import styles from './Navigation.module.scss';

import Loader from '../Loader/Loader';

const NavigationToggle = lazy(async () => {
  const module = await import('../Buttons/Buttons');
  return { default: module.NavigationToggle };
});

const links = {
  About: '#about',
  Portfolio: '#portfolio',
  Blog: '/blogs',
};

export default function Sidemenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Suspense fallback={<Loader />}>
      <div className={styles.toggle}>
        <IconButton
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label="Toggle Menu"
        >
          <NavigationToggle isOpen={isMenuOpen} />
        </IconButton>
      </div>
      <aside
        className={cn(styles.container, { [styles.openMenu]: isMenuOpen })}
      >
        <nav>
          <ol>
            {Object.entries(links).map(([name, section], index) => (
              <li style={{ animationDelay: `${150 * index}ms` }} key={name}>
                <a href={section}>{name}</a>
              </li>
            ))}
            {/* <li
              className={styles.linkButton}
              style={{ animationDelay: `${150 * (Object.keys(links).length + 1)}ms` }}
            >
              <a href="/assets/images/me.jpg" download>Resume</a>
            </li> */}
          </ol>
        </nav>
      </aside>
    </Suspense>
  );
}
