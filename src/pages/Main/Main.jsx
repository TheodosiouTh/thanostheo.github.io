import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styles from './Main.module.scss';

/* COMPONENTS */
import Navigation from '../../components/Navigation/Navigation';

export default function Index() {
  return (
    <div className={styles.container}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/">
            <div className={styles.heading}>
              <p className={styles.name}>Thanos Theodosiou</p>
              <p className={styles.title}>Software Engineer</p>
            </div>
          </Route>
          <Route path="/projects">Projects</Route>
          <Route path="/blogs">Blogs</Route>
          <Route path="/about">About</Route>
        </Switch>
      </Router>
    </div>
  );
}
