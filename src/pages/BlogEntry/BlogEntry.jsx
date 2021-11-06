import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './BlogEntry.module.scss';

export default function BlogEntry() {
  const [blogEntry, setBlogEntry] = useState('');

  const entry = 'building-a-blog';
  const title = 'Building a blog!';

  useEffect(() => {
    fetch(`/blogs/${entry}/text.md`)
      .then(data => data.text())
      .then(text => setBlogEntry(text));
  });

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <ReactMarkdown>{blogEntry}</ReactMarkdown>
    </div>
  );
}
