import React from 'react';
import styles from './App.module.scss';

import Navigation from '../components/Navigation/Navigation';

import Main from './Main/Main';

function App() {
  return (
    <div className={styles.App}>
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
