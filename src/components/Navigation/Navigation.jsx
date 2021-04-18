import React, { useState } from 'react';
import cn from 'classnames';

/* ICONS */
import {
  Home as HomeIcon,
  Computer as ComputerIcon,
  Note as NoteIcon,
  Info as InfoIcon,
  Menu as MenuIcon,
} from '@material-ui/icons';

/* SUB-COMPONENTS */
import { IconButton } from '@material-ui/core';
import { IconRoute } from '../Links/Links';

import styles from './Navigation.module.scss';

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
      <div
        className={cn(styles.container, {
          [styles.open]: isMenuOpen,
        })}
      >
        <IconRoute title="Index" route="/">
          <HomeIcon />
        </IconRoute>
        <IconRoute title="Projects" route="/projects">
          <ComputerIcon />
        </IconRoute>
        <IconRoute title="Blog" route="/blogs">
          <NoteIcon />
        </IconRoute>
        <IconRoute title="About Me" route="/about">
          <InfoIcon />
        </IconRoute>
      </div>
    </>
  );
}
