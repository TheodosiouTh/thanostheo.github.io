import React from 'react';

import styles from './About.module.scss';

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.pageHead}>About</div>
      <div className={styles.pageContent}>Content</div>
    </div>
  );
}
