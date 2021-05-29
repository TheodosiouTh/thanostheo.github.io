import React from 'react';
import styles from './App.module.scss';

import Header from '../components/Header/Header';

import Main from './Main/Main';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
