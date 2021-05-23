import React, { useState } from 'react';
import cn from 'classnames';

/* ICONS */
import {
  Menu as MenuIcon,
} from '@material-ui/icons';

/* SUB-COMPONENTS */
import { IconButton } from '@material-ui/core';
import styles from './Navigation.module.scss';

const links = ['About', 'Experience', 'Projects'];

export default function Sidemenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.toggle}>
        <IconButton
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label="Toggle Menu"
        >
          <MenuIcon />
        </IconButton>
      </div>
      <aside className={cn(styles.container, { [styles.openMenu]: isMenuOpen })}>
        <nav>
          {links.map((link) => (
            <a href="/#" className={styles.navigationLinks} key={link}>{link}</a>
          ))}
          <a href="/assets/images/me.jpg" download className={styles.linkButton}>Resume</a>
        </nav>
      </aside>
    </>
  );
}
