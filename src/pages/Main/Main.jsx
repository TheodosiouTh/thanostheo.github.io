import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';

import styles from './Main.module.scss';

/* COMPONETS */
const Homepage = lazy(() => import('../HomePage/HomePage'));
const BlogEntry = lazy(() => import('../BlogEntry/BlogEntry'));
const BlogList = lazy(() => import('../BlogList/BlogList'));

export default function Index() {
  return (
    <Suspense fallback={<Loader />}>
      <div className={styles.container}>
        <Router>
          <Switch>
            <Route path="/blogs/:slug" component={BlogEntry} />
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
}
