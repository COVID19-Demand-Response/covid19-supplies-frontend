
import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import { AuthenticationService } from '../services/AuthenticationService';
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    AuthenticationService.isAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

export default PrivateRoute;