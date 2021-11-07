import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import Tags from '../Tags/Tags';

import styles from './Card.module.scss';
import { getFormatedDate } from '../../../common/utils';

export default function Card({ slug, entry, index }) {
  return (
    <div
      style={{ animationDelay: `${100 * index}ms` }}
      className={cn(styles.container, 'fadeInUp')}
    >
      <div className={styles.blogInfo}>
        <div>
          <Tags tags={entry.tags} />
        </div>
        <div className={styles.blogDate}>
          <div>{getFormatedDate(entry.date)}</div>
        </div>
      </div>
      <Link to={`/blogs/${slug}`} className={styles.title}>
        {entry.title}
      </Link>
    </div>
  );
}
