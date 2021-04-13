import React from 'react';
import { Link } from 'react-router-dom';

/* COMPONENTS */
import { IconButton } from '@material-ui/core';

import styles from './NavigationLink.module.scss';

export default function NavigationLink({ title, route, children }) {
  return (
    <Link to={route} className={styles.container}>
      <IconButton title={title}>{children}</IconButton>
    </Link>
  );
}
