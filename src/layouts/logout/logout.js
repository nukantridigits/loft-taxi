import React, {Component} from 'react';
import LoginForm from "../../components/loginForm";
import Modal from "../../components/modal";
import Logo from "../../components/logo";

import './logout.scss';

class LogoutLayout extends Component {
    getWrapperClassList = (pageClass) => {
        return 'main_wrapper logout_wrapper ' + pageClass + '_page_wrapper';
    };

    getContentClassList = (pageClass) => {
        return 'content ' + pageClass + '_content';
    };

    render() {
        let {onChangePage, pageClass} = this.props;

        return (
            <div className={this.getWrapperClassList(pageClass)}>
                <div className='main_content'>
                    <div className={this.getContentClassList(pageClass)}>
                        <Logo/>
                        <Modal>
                            <LoginForm onChangePage={onChangePage} pageClass={pageClass}/>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogoutLayout;
