import React from 'react';

import Tags from '../Tags/Tags';

import styles from './Card.module.scss';

export default function Card({ slug, entry }) {
  return (
    <div className={styles.container}>
      <div className={styles.blogInfo}>
        <div>
          <Tags tags={entry.tags} />
        </div>
        <div>{entry.date}</div>
      </div>
      <a href={`/blogs/${slug}`} className={styles.title}>
        {entry.title}
      </a>
    </div>
  );
}
