import React from 'react';
import styles from './App.module.scss';

import Header from '../components/Header/Header';
import ParticleBackground from '../components/ParticleBackground/ParticleBackground';

import Main from './Main/Main';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <ParticleBackground />
    </div>
  );
}

export default App;
