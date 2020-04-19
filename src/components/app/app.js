import React, {Component} from 'react';
import {AuthContext} from "../../contexts/authcontext";
import pageList from '../../appData/pageList';
import {Switch, Route, Redirect} from 'react-router-dom';
import './app.scss';

const App = () => {
    const redirectPath = '/';
    const isAuthorized = false;

    return (
        <div className="app" id="app" data-testid="app">
            <Switch>
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
                                key={id}
                                exact={exact}
                            />;
                        } else {
                            routeItem = <PrivateRoute
                                component={route.component}
                                path={path}
                                isAuthorized={isAuthorized}
                                redirectPath={redirectPath}
                                key={id}
                                exact={exact}

                            />;
                        }

                        return routeItem;
                    })
                };
            </Switch>
        </div>
    );
};

const PrivateRoute = ({component: Component, isAuthorized, redirectPath, ...rest}) => (
    <Route {...rest} render={(props) => (isAuthorized === true)
        ? <Component {...props}/>
        : <Redirect to={redirectPath}/>
    }/>
);

export default App;
