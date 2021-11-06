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
          <Switch>
            <div className={styles.container}>
              <Route path="/blogs" component={BlogList} />
              <Route path="/blogs/:slug" component={BlogEntry} />
              <Route path="/" component={Main} />
            </div>
          </Switch>
        </Router>
        <ParticleBackground />
      </div>
    </Suspense>
  );
}

export default App;
