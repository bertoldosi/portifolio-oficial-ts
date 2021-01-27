import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

import Home from '../pages/Home/home';
import Login from '../pages/Login/login';
import Projeto from '../pages/Projeto/projeto';
import RoutePrivate from '../routes/Route';

const Routes = function () {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projetos" component={Projeto} />
      <RoutePrivate path="/login" component={Login} />
      <RoutePrivate path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
