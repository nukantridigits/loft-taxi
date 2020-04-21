import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, redirectPath, isAuthorized,...rest}) => (
    <Route {...rest} render={(props) => (isAuthorized === true)
        ? <Component {...props}/>
        : <Redirect to={redirectPath}/>
    }/>
);

export default PrivateRoute;
