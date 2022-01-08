import React, { lazy, Suspense } from 'react';
import styles from './App.module.scss';

import Loader from '../components/Loader/Loader';

const Header = lazy(() => import('../components/Header/Header'));
const Main = lazy(() => import('./Main/Main'));

const ParticleBackground = lazy(() => import('../components/ParticleBackground/ParticleBackground'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className={styles.App}>
        <Header />
        <Main />
        <ParticleBackground />
      </div>
    </Suspense>
  );
}

export default App;
