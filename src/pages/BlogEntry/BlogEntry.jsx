import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation, useHistory } from 'react-router-dom';

import styles from './BlogEntry.module.scss';

import SyntaxHighlighter from '../../components/CodeHighlighter/CodeHighlighter';
import { readFile } from '../../common/utils';

const SLUG_LOCATION = 1;
export default function BlogEntry() {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState(null);

  const location = useLocation();
  const history = useHistory();
  const slug = location.pathname.split('blogs/')[SLUG_LOCATION];

  useEffect(() => {
    readFile(
      '/blog-entries/index.json',
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data => {
        const entries = JSON.parse(data);
        const entry = entries[slug];
        setTitle(entry.title);
        setTags(entry.tags);
      },
    );
    readFile(`/blog-entries/${slug}/text.md`, undefined, setText);
  }, []);

  return (
    <div className={styles.container}>
      {tags &&
        tags.map(tag => (
          <a href={`/blogs?tag=${tag}`} className={styles.tag} key={tag}>
            {tag}
          </a>
        ))}
      <h1 className={styles.title}>{title}</h1>

      <img
        className={styles.headerImage}
        src={`/blog-entries/${slug}/image.jpg`}
        alt={title}
      />

      <ReactMarkdown
        className={styles.textContainer}
        components={{
          code: SyntaxHighlighter,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
