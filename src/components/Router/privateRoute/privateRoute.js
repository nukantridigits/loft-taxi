import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


const PrivateRoute = ({component: Component, redirectPath, isAuthorized, ...rest}) => (
    <Route {...rest} render={(props) => (isAuthorized === true)
        ? <Component {...props}/>
        : <Redirect to={redirectPath}/>
    }/>
);

const mapStateToProps = state => ({
        isAuthorized: state.auth.isAuthorized,
    }
);

export default connect(mapStateToProps)(PrivateRoute);
