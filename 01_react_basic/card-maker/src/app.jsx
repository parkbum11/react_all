import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Maker from './components/maker/maker';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact><Login authService={authService} /></Route>
          <Route path="/maker" exact><Maker authService={authService} /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
