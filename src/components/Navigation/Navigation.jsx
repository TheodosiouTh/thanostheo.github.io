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
          <ol>
            {links.map((link, index) => (
              <li
                style={{ animationDelay: `${150 * index}ms` }}
                key={link}
              >
                <a
                  href="/#"
                >
                  {link}
                </a>
              </li>
            ))}
            <li
              className={styles.linkButton}
              style={{ animationDelay: `${150 * (links.length + 1)}ms` }}
            >
              <a href="/assets/images/me.jpg" download>Resume</a>
            </li>
          </ol>
        </nav>
      </aside>
    </>
  );
}
