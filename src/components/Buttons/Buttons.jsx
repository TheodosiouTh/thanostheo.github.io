import React from 'react';
import cn from 'classnames';

import styles from './Buttons.module.scss';

export function NavigationToggle({ isOpen }) {
  return (
    <div className={cn(styles.NavigationToggle, { [styles.open]: isOpen })}>
      <div className={styles.NavigationToggleBurger} />
    </div>
  );
}
