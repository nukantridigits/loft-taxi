import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PageList from "../../appData/pageList";
import LogoutLayout from "../../layouts/logout";

class SignupPage extends Component {
    static propTypes = {
        onChangePage: PropTypes.func.isRequired,
    };

    render() {
        let {onChangePage} = this.props;
        let pageId = PageList.signup.id;

        return (
            <LogoutLayout onChangePage={onChangePage} className={pageId} pageId={pageId} />
        );
    }
}

export default SignupPage;
