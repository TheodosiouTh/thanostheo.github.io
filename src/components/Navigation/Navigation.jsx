import React from 'react';

/* ICONS */
import {
  Home as HomeIcon,
  Computer as ComputerIcon,
  Note as NoteIcon,
  Info as InfoIcon,
} from '@material-ui/icons';

/* SUB-COMPONENTS */
import { IconRoute } from '../Links/Links';

import styles from './Navigation.module.scss';

export default function Sidemenu() {
  return (
    <div className={styles.container}>
      <IconRoute title="Index" route="/">
        <HomeIcon className={styles.icon} />
      </IconRoute>
      <IconRoute title="Projects" route="/projects">
        <ComputerIcon className={styles.icon} />
      </IconRoute>
      <IconRoute title="Blog" route="/blogs">
        <NoteIcon className={styles.icon} />
      </IconRoute>
      <IconRoute title="About Me" route="/about">
        <InfoIcon className={styles.icon} />
      </IconRoute>
    </div>
  );
}
