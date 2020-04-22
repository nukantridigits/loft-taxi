import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from './privateRoute';
import pageList from '../../appData/pageList';

const Router = ({isAuthorized}) => {
    return (<Switch>
        {
            Object.values(pageList).map(route => {
                let routeItem = null;
                let id = route.id;
                let component = route.component;
                let path = route.path;
                let exact = route.exact;

                if (!route.private) {
                    routeItem = <Route
                        component={component}
                        path={path}
                        exact={exact}
                        key={id}
                    />;
                } else {
                    routeItem = <PrivateRoute
                        component={route.component}
                        path={path}
                        isAuthorized={isAuthorized}
                        redirectPath={pageList.signup.path}
                        exact={exact}
                        key={id}
                    />;
                }

                return routeItem;
            })
        };
    </Switch>)
};

export default Router;