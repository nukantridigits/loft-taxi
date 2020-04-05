import React, {Component} from 'react';
import PageList from "../../appData/pageList";
import LogoutLayout from "../../layouts/logout";

class SignupPage extends Component {
    render() {
        let {onChangePage} = this.props;

        return (
            <LogoutLayout onChangePage={onChangePage} className={PageList.signup.id} />
        );
    }
}

export default SignupPage;
