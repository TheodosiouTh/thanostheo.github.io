import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import Tags from '../Tags/Tags';

import styles from './Card.module.scss';

export default function Card({ slug, entry, index }) {
  return (
    <div
      style={{ animationDelay: `${100 * index}ms` }}
      className={cn(styles.container, 'show')}
    >
      <div className={styles.blogInfo}>
        <div>
          <Tags tags={entry.tags} />
        </div>
        <div>{entry.date}</div>
      </div>
      <Link to={`/blogs/${slug}`} className={styles.title}>
        {entry.title}
      </Link>
    </div>
  );
}
