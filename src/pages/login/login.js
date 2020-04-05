import React, {Component} from 'react';
import PageList from '../../appData/pageList';
import LogoutLayout from '../../layouts/logout'

class LoginPage extends Component {
    render() {
        let {onChangePage} = this.props;

        return (
            <LogoutLayout onChangePage={onChangePage} pageClass={PageList.login.id} />
        );
    }
}

export default LoginPage;
