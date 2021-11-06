import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';

import Loader from '../components/Loader/Loader';

const Header = lazy(() => import('../components/Header/Header'));
const Main = lazy(() => import('./Main/Main'));
const BlogEntry = lazy(() => import('./BlogEntry/BlogEntry'));
const BlogList = lazy(() => import('./BlogList/BlogList'));

const ParticleBackground = lazy(() =>
  import('../components/ParticleBackground/ParticleBackground'),
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className={styles.App}>
        <Router>
          <Header />
          <div className={styles.container}>
            <Switch>
              <Route path="/blogs">
                <BlogList />
              </Route>
              <Route path="/blogs/:slug">
                <BlogEntry />
              </Route>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </div>
        </Router>
        <ParticleBackground />
      </div>
    </Suspense>
  );
}

export default App;
