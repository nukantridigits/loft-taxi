import React, {Component} from 'react';
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
        let {page} = this.state;
        let component = null;

        switch (page) {
            case(pageList.login.id):
                component = <LoginPage onChangePage={this.onChangePage}/>;
                break;
            case(pageList.signup.id):
                component = <SignupPage onChangePage={this.onChangePage}/>;
                break;
            case(pageList.map.id):
                component = <MapPage onChangePage={this.onChangePage}/>;
                break;
            case(pageList.profile.id):
                component = <ProfilePage onChangePage={this.onChangePage}/>;
                break;
            default:
                break;
        }

        return (
            <div className='app' id='app'>
                {component}
            </div>
        );
    }
}

export default App;
