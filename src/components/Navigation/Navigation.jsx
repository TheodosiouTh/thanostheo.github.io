import React from 'react';

/* ICONS */
import {
  Home as HomeIcon,
  Computer as ComputerIcon,
  Note as NoteIcon,
  Info as InfoIcon,
} from '@material-ui/icons';

/* COMPONENTS */
import NavigationLink from './NavigationLink';

import styles from './Navigation.module.scss';

export default function Sidemenu() {
  return (
    <div className={styles.container}>
      <NavigationLink title="Index" route="/">
        <HomeIcon className={styles.icon} />
      </NavigationLink>
      <NavigationLink title="Projects" route="/projects">
        <ComputerIcon className={styles.icon} />
      </NavigationLink>
      <NavigationLink title="Blog" route="/blogs">
        <NoteIcon className={styles.icon} />
      </NavigationLink>
      <NavigationLink title="About Me" route="/about">
        <InfoIcon className={styles.icon} />
      </NavigationLink>
    </div>
  );
}
