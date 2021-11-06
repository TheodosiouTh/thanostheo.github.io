import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './BlogEntry.module.scss';

import SyntaxHighlighter from '../../components/CodeHighlighter/CodeHighlighter';

export default function BlogEntry() {
  const [blogEntry, setBlogEntry] = useState('');

  const entry = 'building-a-blog';
  const title = 'Building a blog from scratch!';
  const tags = ['react', 'javascript', 'happiness'];

  useEffect(() => {
    fetch(`/blog-entries/${entry}/text.md`)
      .then(data => data.text())
      .then(text => setBlogEntry(text));
  });

  return (
    <div className={styles.container}>
      {tags &&
        tags.map(tag => (
          <a href={`/blogs?tag=${tag}`} className={styles.tag}>
            {tag}
          </a>
        ))}
      <h1 className={styles.title}>{title}</h1>
      <ReactMarkdown
        className={styles.textContainer}
        components={{
          code: SyntaxHighlighter,
        }}
      >
        {blogEntry}
      </ReactMarkdown>
    </div>
  );
}
