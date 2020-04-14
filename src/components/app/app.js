import React, {Component} from 'react';
import {AuthContext} from "../../contexts/authcontext";
import pageList from '../../appData/pageList';
import LoginPage from "../../pages/login";
import SignupPage from "../../pages/signup";
import MapPage from "../../pages/map";
import ProfilePage from "../../pages/profile";
import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: pageList.login.id,
        };
    }

    onChangePage = (value) => {
        this.setState({page: value})
    };

    render() {
        let component = null;
        let {page} = this.state;
        let isLoggedIn = this.context && this.context.isLoggedIn ? this.context.isLoggedIn : false;

        switch (page) {
            case(pageList.login.id):
                component = <LoginPage onChangePage={this.onChangePage}/>;
                break;
            case(pageList.signup.id):
                component = <SignupPage onChangePage={this.onChangePage}/>;
                break;
            case(pageList.map.id):
                if (isLoggedIn) {
                    component = <MapPage onChangePage={this.onChangePage}/>;
                }
                break;
            case(pageList.profile.id):
                if (isLoggedIn) {
                    component = <ProfilePage onChangePage={this.onChangePage}/>;
                }
                break;
            default:
                break;
        }

        return (
            <div className="app" id="app" data-testid="app">
                {component}
            </div>
        );
    }
}

App.contextType = AuthContext;

export default App;
