import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import LogIn from '../login/LoginComponent'

const Routes = () => (
  <div>
    <Switch>
      <Route path="/" component={Home} exact />
      {/* <Route path="/login" component={LogIn} /> */}
    </Switch>
  </div>
);
export default Routes;
