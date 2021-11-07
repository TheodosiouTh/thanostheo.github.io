import React, { useEffect, useState } from 'react';
import { readFile } from '../../common/utils';

import Card from '../../components/Blog/Card/Card';

import styles from './BlogList.module.scss';

export default function BlogList() {
  const [blogIndex, setBlogIndex] = useState(null);

  useEffect(() => {
    readFile(
      '/blog-entries/index.json',
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data => {
        const entries = JSON.parse(data);
        setBlogIndex(entries);
      },
    );
  }, []);

  return (
    <div>
      <h1 className={styles.pageTitle}>Articles</h1>
      {blogIndex &&
        Object.entries(blogIndex).map(([slug, entry]) => (
          <Card slug={slug} entry={entry} />
        ))}
    </div>
  );
}
