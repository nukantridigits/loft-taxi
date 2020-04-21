import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import {Link, Redirect} from 'react-router-dom';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import PageList from "../../appData/pageList";
import {connect} from 'react-redux';
import {authRequest} from "../../modules/auth";
import './loginForm.scss';


const LoginForm = ({isRegForm = false, authRequest, isLoading, isAuthorized}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    LoginForm.propTypes = {
        isRegForm: PropTypes.bool
    };

    const handleEmailChange = event => {
        return setEmail(event.target.value);
    };

    const handlePasswordChange = event => {
        return setPassword(event.target.value);
    };

    const onFormSubmitHandler = event => {
        event.preventDefault();

        if (!isRegForm && !!email && !!password) {
            authRequest({email, password});
        }

        //todo isRegForm &&...
    };

    let formMainClass = isRegForm ? 'form_signup' : 'form_login';
    let headerText = isRegForm ? 'Регистрация' : 'Войти';
    let linkWrapperText = isRegForm ? 'Уже зарегистрированы?' : 'Новый пользователь?';
    let linkBtnText = isRegForm ? ' Войти' : ' Зарегистрируйтесь';
    let loginLabelText = isRegForm ? 'Адрес электронной почты' : 'Имя пользователя';

    return isAuthorized ?
        (<Redirect to={PageList.map.path}/>) : (
            <form className={`form ${formMainClass}`} id="loft_taxi_form" data-testid="auth-form"
                  onSubmit={onFormSubmitHandler}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h1">
                            {headerText}
                        </Typography>
                        <Typography component="p">
                            {linkWrapperText}
                            <Link to={!isRegForm ? PageList.signup.path : PageList.login.path}
                                  data-testid="change-form-page-link"
                                  data-page-id={!isRegForm ? PageList.signup.id : PageList.login.id}>
                                {linkBtnText}
                            </Link>
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth={true} className="form_control">
                            <InputLabel htmlFor="email">
                                {loginLabelText}
                            </InputLabel>
                            <Input id="email" data-testid="email-input" value={email} onChange={handleEmailChange}
                                   required/>
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
                            <Input id="password" data-testid="password-input" value={password}
                                   onChange={handlePasswordChange} required/>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} align="right" className="form_footer">
                        <Button disabled={isLoading} data-testid="form-submit-btn" size="large" type="submit"
                                variant="contained"
                                color="primary">
                            Войти
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
};

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        isAuthorized: state.auth.isAuthorized,
    }
};

const mapDispatchToProps = {authRequest};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
