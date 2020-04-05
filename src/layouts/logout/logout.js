import React, {Component} from 'react';
import LoginForm from "../../components/loginForm";
import Logo from "../../components/logo";
import PageList from "../../appData/pageList";


import './logout.scss';

class LogoutLayout extends Component {
    render() {
        let {onChangePage, className} = this.props;

        return (
            <div className={`main_wrapper logout_wrapper ${className}_page_wrapper`}>
                <div className='main_content'>
                    <div className={`content ${className}_content`}>
                        <Logo/>
                        <LoginForm onChangePage={onChangePage} isRegForm={className === PageList.signup.id}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogoutLayout;
