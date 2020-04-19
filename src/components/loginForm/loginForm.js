import React, {Component} from 'react';
import {AuthContext} from '../../contexts/authcontext';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import PageList from "../../appData/pageList";
import './loginForm.scss';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }
    }

    static defaultProps = {
        isRegForm: false
    };

    static propTypes = {
        isRegForm: PropTypes.bool
    };

    handleLoginChange = event => {
        return this.setState({login: event.target.value});
    };

    handlePasswordChange = event => {
        return this.setState({password: event.target.value});
    };

    formSubmitHandler = () => {
        let {login, password} = this.state;

        if (this.context) {
            this.context.login(login, password);
        }

        // return this.props.onChangePage(PageList.map.id);
    };

    changePage = event => {
        event.preventDefault();
        let {target} = event;

        // return this.props.onChangePage(target.dataset.pageId);
    };

    render() {
        let {isRegForm} = this.props;
        let {login, password} = this.state;
        let formMainClass = isRegForm ? 'form_signup' : 'form_login';
        let headerText = isRegForm ? 'Регистрация' : 'Войти';
        let linkWrapperText = isRegForm ? 'Уже зарегистрированы?' : 'Новый пользователь?';
        let linkBtnText = isRegForm ? ' Войти' : ' Зарегистрируйтесь';
        let loginLabelText = isRegForm ? 'Адрес электронной почты' : 'Имя пользователя';

        return (
            <form className={`form ${formMainClass}`} id="loft_taxi_form" data-testid="auth-form"
                  onSubmit={this.formSubmitHandler}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h1">
                            {headerText}
                        </Typography>
                        <Typography component="p">
                            {linkWrapperText}
                            <Link data-testid="change-form-page-link" data-page-id={!isRegForm ? PageList.signup.id : PageList.login.id}
                                  onClick={this.changePage}>
                                {linkBtnText}
                            </Link>
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth={true} className="form_control">
                            <InputLabel htmlFor="login">
                                {loginLabelText}
                            </InputLabel>
                            <Input id="login" data-testid="login-input" value={login} onChange={this.handleLoginChange} required/>
                        </FormControl>
                    </Grid>

                    {isRegForm &&
                    <Grid container spacing={2}>
                        <Grid item sm={6}>
                            <FormControl fullWidth={true} className="form_control">
                                <InputLabel htmlFor="name">
                                    Имя
                                </InputLabel>
                                <Input id="name" data-testid="name-input" required/>
                            </FormControl>
                        </Grid>
                        <Grid item sm={6}>
                            <FormControl fullWidth={true} className="form_control">
                                <InputLabel htmlFor="surname">
                                    Фамилия
                                </InputLabel>
                                <Input id="surname" data-testid="surname-input" required/>
                            </FormControl>
                        </Grid>
                    </Grid>
                    }

                    <Grid item xs={12}>
                        <FormControl fullWidth={true} className="form_control">
                            <InputLabel htmlFor="password">
                                Пароль
                            </InputLabel>
                            <Input id="password" data-testid="password-input" value={password} onChange={this.handlePasswordChange} required/>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} align="right" className="form_footer">
                        <Button data-testid="form-submit-btn" size="large" type="submit" variant="contained" color="primary">
                            Войти
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

LoginForm.contextType = AuthContext;

export default LoginForm;
