import React, {Component} from 'react';
import PageList from "../../appData/pageList";
import LogoutLayout from "../../layouts/logout";

class SignupPage extends Component {
    render() {
        let {onChangePage} = this.props;
        let pageId = PageList.signup.id;

        return (
            <LogoutLayout onChangePage={onChangePage} className={pageId} pageId={pageId} />
        );
    }
}

export default SignupPage;
