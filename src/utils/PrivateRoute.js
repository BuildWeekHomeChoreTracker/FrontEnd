import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      render={props => {
        if (localStorage.get(item)) {
          <Component {...props} />;
        } else {
          <Redirect to='/' />;
        }
      }}
    />
  );
};
