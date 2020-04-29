import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import pageList from "../../../appData/pageList";


const PrivateRoute = ({component: Component, isAuthorized, redirectPath = pageList.signup.path, ...rest}) => (
    <Route {...rest} render={(props) => (isAuthorized === true)
        ? <Component {...props}/>
        : <Redirect to={redirectPath}/>
    }/>
);

export default PrivateRoute;
