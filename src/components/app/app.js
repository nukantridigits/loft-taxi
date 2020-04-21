import React from 'react';
import pageList from '../../appData/pageList';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from '../privateRoute';
import './app.scss';
import {connect} from "react-redux";

const App = ({isAuthorized}) => {
    const redirectPath = '/';

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
                                exact={exact}
                                key={id}
                            />;
                        } else {
                            routeItem = <PrivateRoute
                                component={route.component}
                                path={path}
                                isAuthorized={isAuthorized}
                                redirectPath={redirectPath}
                                exact={exact}
                                key={id}
                            />;
                        }

                        return routeItem;
                    })
                };
            </Switch>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        isAuthorized: state.auth.isAuthorized,
    }
};

export default connect(mapStateToProps)(App);
