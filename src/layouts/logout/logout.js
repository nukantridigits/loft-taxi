import React, {Component} from 'react';
import LoginForm from "../../components/loginForm";
import Logo from "../../components/logo";
import PageList from "../../appData/pageList";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import './logout.scss';

class LogoutLayout extends Component {
    render() {
        let {onChangePage, className, pageId} = this.props;

        return (
            <div className={`main_wrapper logout_wrapper ${className}_page_wrapper`}>
                <div className='main_content'>
                    <div className={`content ${className}_content`}>
                        <Logo type="light"/>
                        <Paper>
                            <LoginForm onChangePage={onChangePage} isRegForm={pageId === PageList.signup.id}/>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogoutLayout;
