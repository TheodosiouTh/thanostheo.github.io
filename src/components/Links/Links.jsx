import React from 'react';
import { Link } from 'react-router-dom';

/* COMPONENTS */
import { IconButton } from '@material-ui/core';

import styles from './Links.module.scss';

export function IconRoute({ title, route, children }) {
  return (
    <Link to={route} className={styles.container}>
      <IconButton title={title}>{children}</IconButton>
    </Link>
  );
}

export function IconLink({ title, route, download, children }) {
  return (
    <a
      target="_blank"
      href={route}
      className={styles.container}
      rel="noreferrer"
      download={download}
    >
      <IconButton title={title}>{children}</IconButton>
    </a>
  );
}
