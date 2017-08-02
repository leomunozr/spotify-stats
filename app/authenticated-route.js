import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, path, isAuthenticated, ...rest }) => {
  return (
    <Route to={path} render={() => (
      isAuthenticated ? (
        <Component {...rest} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: {
            from: location,
            name: 'hi'
          }
        }} />
    ))} />
  );
};

export default AuthenticatedRoute;
