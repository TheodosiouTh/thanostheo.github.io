import React from 'react';

import {
  LinkedIn,
  GitHub,
  Instagram,
  FileCopy,
  Email,
} from '@material-ui/icons';

import { IconLink } from '../../components/Links/Links';

import styles from './About.module.scss';

const { PUBLIC_URL } = process.env;

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
        <header className={styles.pageHead}>About</header>
        <section className={styles.mainInfo}>
          <img
            src={`${PUBLIC_URL}/assets/images/me.jpg`}
            alt="Thanos Theodosiou"
            className={styles.personalImage}
          />
          <p className={styles.personalMessage}>
            Hello, my name is Thanos Theodosiou. I am a Full Stack Software
            Developer (leaning more towards Backend) with a Bachelor&#39;s
            Degree in Computer Science (
            <i>
              with a specialization in Software Engineering and Artificially
              Intelligent Systems
            </i>
            ). Ever since I was a child I was fascinated by computers, that is
            why in 8th grade I decided to pick up a C++ book and study it as a
            hobby. To me implementing the things I read there on the computer
            and seeing it respond to my code was something out of this world. So
            here I am a few years later doing something I feel like I was born
            to do.
          </p>
        </section>
        <section className={styles.links}>
          <div className={styles.resume}>
            <IconLink
              title="Resume"
              route={`${PUBLIC_URL}/assets/images/me.jpg`}
              download
            >
              <FileCopy />
            </IconLink>
          </div>
          <div className={styles.social}>
            <IconLink
              title="LinkedIn Page"
              route="https://www.linkedin.com/in/thanos-theodosiou-61365b18b/"
            >
              <LinkedIn />
            </IconLink>
            <IconLink
              title="Github Page"
              route="https://github.com/TheodosiouTh"
            >
              <GitHub />
            </IconLink>
            <IconLink
              title="Instagram Page"
              route="https://www.instagram.com/thanoswasbusy/"
            >
              <Instagram />
            </IconLink>
          </div>
          <div className={styles.contact}>
            <IconLink title="Contact" route="mailto:thanosthd@gmail.com">
              <Email />
            </IconLink>
          </div>
        </section>
      </div>
    </div>
  );
}
