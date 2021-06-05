import React from 'react';

import styles from './AboutMe.module.scss';

export default function AboutME() {
  return (
    <section className={styles.container} id="about">
      <h2>About Me</h2>
      <div className={styles.content}>
        <div>
          <p>
            Hello! My name is Thanos and I enjoy solving complex problems with efficient,
            maintainable and scalable code.
            My interest in software development started at the age of 14 when I decided to buy
            <a href="https://www.goodreads.com/book/show/52094843-c" target="_blank" rel="noreferrer"> this book </a>
            in order to learn how to program computer appications. After I finished reading the book
            I knew that I wanted to be a software engineer, so a few years later after a
            lot of studying ,I got my
            {' '}
            <strong>B.Sc. Computer Schience </strong>
            at
            {' '}
            <a href="https://www.cs.unipi.gr/index.php?lang=en">University of Piraeus</a>
            .
          </p>
          <p>
            Fast-forward to today, and I
            <span>&#39;</span>
            ve had the privilege of working at one of the biggest software UX &
            Softtware Development Agencies in Greece at products such as
            {' '}
            <a href="https://kritikos-sm.gr/">
              Kritikos-SM
            </a>
            {' '}
            and
            {' '}
            <a href="https://box.gr/">
              BOX
            </a>
            .
          </p>
          <p>
            Here are a few technologies I
            <span>&#39;</span>
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
        <div>
          <div className={styles.imageContainer}>
            <img src="assets/images/me.jpg" alt="Thanos Theodosiou" />
          </div>
        </div>
      </div>

    </section>
  );
}
