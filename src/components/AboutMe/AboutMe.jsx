import React, { useRef } from 'react';
import cn from 'classnames';

import isVisibleToUser from '../../common/isVisibleToUser';

import styles from './AboutMe.module.scss';

export default function AboutMe() {
  const ref = useRef();
  const isVisible = isVisibleToUser(ref);

  return (
    <section className={cn({ show: isVisible })} id="about" ref={ref}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Hello, my name is Thanos! I enjoy solving complex problems with
            efficient, maintainable, and scalable code. My interest in software
            engineering started at the age of 14 when I decided to buy and read{' '}
            <a
              href="https://www.goodreads.com/book/show/52094843-c"
              target="_blank"
              rel="noreferrer"
            >
              this book{' '}
            </a>
            to learn how to program computer applications. After that,
            I knew that I wanted to be a Software
            Engineer, so a few years later, I got my{' '}
            <strong>B.Sc. Computer Science </strong>
            at the{' '}
            <a href="https://www.cs.unipi.gr/index.php?lang=en">
              University of Piraeus
            </a>
            .
          </p>
          <p>
            Fast-forward to today, and I<span>&#39;</span>
            ve had the privilege of working at one of the biggest UX Design &
            Software Development Agencies in Greece at products such as{' '}
            <a href="https://kritikos-sm.gr/">Kritikos-SM</a> and{' '}
            <a href="https://box.gr/">BOX</a>.
          </p>
          <p>
            Here are a few technologies I<span>&#39;</span>
            ve been working with:
            <ul>
              <li>Javascript (ES6)</li>
              <li>Golang</li>
              <li>MongoDB</li>
              <li>React</li>
              <li>NodeJs</li>
              <li>Express</li>
              <li>Reddis</li>
              <li>Heroku</li>
            </ul>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src="assets/images/me.jpg" alt="Thanos Theodosiou" />
          </div>
        </div>
      </div>
    </section>
  );
}
