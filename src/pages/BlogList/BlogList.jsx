import React, { useEffect, useState } from 'react';

import { readFile } from '../../common/utils';

import Card from '../../components/Blog/Card/Card';
import { useQuery } from '../../components/useQuery';

import styles from './BlogList.module.scss';

export default function BlogList() {
  const [blogIndex, setBlogIndex] = useState({});
  const [filteredIndex, setFilteredIndex] = useState({});
  const [selectedTag, setSelectedTag] = useState('');

  const query = useQuery();

  function filterIndexOnTag(index, tag) {
    return Object.entries(index).reduce((accumulator, [slug, entry]) => {
      if (entry.tags.includes(tag)) {
        return { ...accumulator, [slug]: entry };
      }
      return accumulator;
    }, {});
  }

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

  useEffect(() => {
    const queryTag = query.get('tag');
    if (!queryTag) {
      setFilteredIndex(blogIndex);
      setSelectedTag('');
      return;
    }
    setSelectedTag(queryTag);
    setFilteredIndex(filterIndexOnTag(blogIndex, queryTag));
  }, [blogIndex, query]);

  return (
    <div>
      <h1 className={styles.pageTitle}>{selectedTag || 'Articles'}</h1>
      {filteredIndex &&
        Object.entries(filteredIndex).map(([slug, entry]) => (
          <Card slug={slug} entry={entry} />
        ))}
    </div>
  );
}
