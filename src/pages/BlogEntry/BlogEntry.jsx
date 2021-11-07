import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useHistory, useParams } from 'react-router-dom';
import cn from 'classnames';

import styles from './BlogEntry.module.scss';

import SyntaxHighlighter from '../../components/CodeHighlighter/CodeHighlighter';
import Tags from '../../components/Blog/Tags/Tags';

import { getFormatedDate, readFile } from '../../common/utils';

export default function BlogEntry() {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);
  const [tags, setTags] = useState(null);
  const [hasHeaderImage, setHasHeaderImage] = useState(false);

  const history = useHistory();
  const { slug } = useParams();

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

        if (!entry) {
          history.push('/blogs');
          return;
        }

        setTitle(entry.title);
        setDate(entry.date);
        setTags(entry.tags);
        setHasHeaderImage(entry.hasHeaderImage);
      },
    );
    readFile(`/blog-entries/${slug}/text.md`, undefined, setText);
  }, []);

  return (
    <div className={cn(styles.container, 'fadeInDown')}>
      <div className={styles.blogInfo}>
        <Tags tags={tags} />
        <div className={styles.blogDate}>{getFormatedDate(date)}</div>
      </div>
      <h1 className={styles.title}>{title}</h1>

      {hasHeaderImage && (
        <img
          className={styles.headerImage}
          src={`/blog-entries/${slug}/image.jpg`}
          alt={title}
        />
      )}

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
