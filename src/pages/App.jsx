import React from 'react';
import Particles from 'react-particles-js';
import styles from './App.module.scss';

import Header from '../components/Header/Header';

import Main from './Main/Main';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Particles
        className={styles.particles}
        params={{
          particles: {
            number: {
              value: 75,
            },
          },
        }}
      />
      <Particles
        className={styles.mobileParticles}
        params={{
          particles: {
            number: {
              value: 25,
            },
            size: {
              value: 1,
            },
          } }}
      />
      <Main />
    </div>
  );
}

export default App;
