import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import PrivateRoute from './privateRoute';
import pageList from '../../appData/pageList';
import {getIsAuthorized} from "../../modules/auth";
import {connect} from "react-redux";
import MapPage from "../../pages/map";
import ProfilePage from "../../pages/profile";
import LoginPage from "../../pages/login";
import SignupPage from "../../pages/signup";

export const Router = ({isAuthorized}) => {
    let router = null;
    let mapPath = pageList.map.path;
    let loginPath = pageList.login.path;
    let signupPath = pageList.signup.path;

    if (isAuthorized) {
        router = <Switch>
            <PrivateRoute isAuthorized={isAuthorized} path={mapPath} component={MapPage}/>
            <PrivateRoute isAuthorized={isAuthorized} path={pageList.profile.path} component={ProfilePage}/>
            <Redirect to={mapPath}/>
        </Switch>
    } else {
        router = <Switch>
            <Route exact={true} path={loginPath} component={LoginPage}/>
            <Route path={signupPath} component={SignupPage}/>
            <Redirect to={signupPath}/>
        </Switch>
    }

    return router;
};

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state),
});

export default connect(mapStateToProps)(Router);
