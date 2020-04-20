import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuthorized, redirectPath, ...rest}) => (
    <Route {...rest} render={(props) => (isAuthorized === true)
        ? <Component {...props}/>
        : <Redirect to={redirectPath}/>
    }/>
);

export default PrivateRoute;
