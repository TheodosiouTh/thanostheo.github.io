import React from 'react';

import styles from './Tags.module.scss';

export default function Tags({ tags }) {
  return (
    <div>
      {tags &&
        tags.map(tag => (
          <a href={`/blogs?tag=${tag}`} className={styles.tag} key={tag}>
            {tag}
          </a>
        ))}
    </div>
  );
}
