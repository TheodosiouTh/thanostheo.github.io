import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styles from './Main.module.scss';

/* COMPONENTS */
import Navigation from '../../components/Navigation/Navigation';

/* PAGES */
import About from '../About/About';

export default function Index() {
  return (
    <div className={styles.container}>
      <Router>
        <Navigation />
        <div className={styles.pages}>
          <Switch>
            <Route path="/projects">Projects</Route>
            <Route path="/blogs">Blogs</Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">Main</Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
