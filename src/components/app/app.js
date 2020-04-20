import React,{useContext} from 'react';
import {AuthContext} from "../../contexts/authcontext";
import pageList from '../../appData/pageList';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from '../privateRoute'
import './app.scss';

const App = () => {
    const redirectPath = '/';
    const authContext = useContext(AuthContext);
    console.log(authContext);

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
                                isAuthorized={authContext.isAuthorized}
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

export default App;
