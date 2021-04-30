import React from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/order" exact component={OrderPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
