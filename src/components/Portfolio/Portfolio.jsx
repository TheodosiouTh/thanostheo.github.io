import React, { useRef } from 'react';
import cn from 'classnames';

import isVisibleToUser from '../../common/isVisibleToUser';

import styles from './Portfolio.module.scss';

export default function Portfolio() {
  const ref = useRef();
  const isVisible = isVisibleToUser(ref);

  return (
    <section
      className={cn(styles.container, { show: isVisible })}
      id="portfolio"
      ref={ref}
    >
      <h2>Portfolio</h2>
      <div className={styles.content}>
        Ever since I found out about version control systems, especially{' '}
        <span className="special">git</span>
        , I have been using it on every one of my projects.
        So, the best way to find past and current projects and see my coding
        journey so far is through my{' '}
        <a
          href="https://github.com/TheodosiouTh"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Profile
        </a>
        . For those who are interested, here are my stats:
        <div className={styles.stats}>
          <a
            href="https://github.com/TheodosiouTh"
            target="_blank"
            rel="noreferrer"
            className={styles.gitHubStats}
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=theodosiouth&count_private=true&show_icons=true&title_color=d64e00&icon_color=d64e00&border_color=d64e00&bg_color=0e0706&text_color=fff"
              alt="github-stats"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
