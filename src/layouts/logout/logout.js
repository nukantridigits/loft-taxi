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
                    <div className={`content ${className}_content wrapper`}>
                        <Grid container
                              justify="center"
                              alignItems="center"
                        >
                            <Grid item xs={12} sm={6}>
                                <Grid container justify="center">
                                    <Logo type="light"/>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className="paper_container">
                                    <LoginForm onChangePage={onChangePage} isRegForm={pageId === PageList.signup.id}/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogoutLayout;
