import React from 'react';
import { HashRouter, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../hooks/AuthContext';
import Dashboard from '../pages/Dashboard';

import Home from '../pages/Home/home';
import Login from '../pages/Login/login';
import Projeto from '../pages/Projeto/projeto';
import Route from '../routes/Route';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = isAuthenticated();
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          Component(<Component {...rest} />)
        ) : (
          <Redirect
            to={{
              pathname: isAuthenticated ? '/login' : '/dashboard',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
const Routes = function () {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route path="/projetos" component={Projeto} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </HashRouter>
  );
};

export default Routes;
