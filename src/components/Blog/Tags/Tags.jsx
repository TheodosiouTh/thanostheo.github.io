import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Tags.module.scss';

export default function Tags({ tags }) {
  return (
    <div className={styles.container}>
      {tags &&
        tags.map(tag => (
          <Link to={`/blogs?tag=${tag}`} className={styles.tag} key={tag}>
            {tag}
          </Link>
        ))}
    </div>
  );
}
