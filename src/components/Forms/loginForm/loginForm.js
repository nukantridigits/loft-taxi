import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import PageList from "../../../appData/pageList";
import {connect} from 'react-redux';
import {authRequest, getIsLoading, regRequest} from "../../../modules/auth";
import {Form, Field} from 'react-final-form';
import './loginForm.scss';
import InputAdornment from "@material-ui/core/InputAdornment";
import ClearIcon from "../clearIcon/clearIcon";


const LoginForm = ({isRegForm = false, authRequest, regRequest, isLoading}) => {
    const initialValues = {
        email: '',
        password: '',
        name: '',
        surname: ''
    };

    const onSubmit = values => {
        const email = values.email;
        const password = values.password;
        const name = values.name;
        const surname = values.surname;

        if (!isRegForm) {
            return authRequest({email, password});
        } else if (isRegForm) {
            return regRequest({email, password, name, surname});
        }
    };

    const validate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = `Заполните обязательное поле «${loginLabelText}»`;
        }

        if (!values.password) {
            errors.password = "Заполните обязательное поле «Пароль»";
        }

        if (isRegForm) {
            if (!values.name) {
                errors.name = "Заполните обязательное поле «Имя»";
            }

            if (!values.surname) {
                errors.surname = "Заполните обязательное поле «Фамилия»";
            }
        }

        return errors;
    };

    let formMainClass = isRegForm ? 'form_signup' : 'form_login';
    let headerText = isRegForm ? 'Регистрация' : 'Войти';
    let linkWrapperText = isRegForm ? 'Уже зарегистрированы?' : 'Новый пользователь?';
    let linkBtnText = isRegForm ? ' Войти' : ' Зарегистрируйтесь';
    let loginLabelText = isRegForm ? 'Адрес электронной почты' : 'Имя пользователя';

    const LoginFormContainer = () => (
        <Form onSubmit={onSubmit}
              initialValues={initialValues}
              validate={validate}
              mutators={{
                  clearEmail: (args, state, utils) => {
                      utils.changeValue(state, 'email', () => undefined)
                  },
                  clearName: (args, state, utils) => {
                      utils.changeValue(state, 'name', () => undefined)
                  },
                  clearSurname: (args, state, utils) => {
                      utils.changeValue(state, 'surname', () => undefined)
                  },
                  clearPassword: (args, state, utils) => {
                      utils.changeValue(state, 'password', () => undefined)
                  },
              }}
        >
            {({form, handleSubmit, submitting}) => (
                <form className={`form ${formMainClass}`} id="loft_taxi_form" onSubmit={handleSubmit}>
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
                            <Field name="email" render={({input, meta}) => (
                                <FormControl fullWidth={true} className="form_control">
                                    <InputLabel htmlFor="email">
                                        {loginLabelText}
                                    </InputLabel>
                                    <Input autocomplete="off" id="email" {...input}
                                           endAdornment={input.value.length >= 1 &&
                                           <InputAdornment position="end">
                                               <ClearIcon onClick={form.mutators.clearEmail}/>
                                           </InputAdornment>
                                           } required/>
                                    {meta.touched && meta.error &&
                                    <span className="validation_error">{meta.error}</span>}
                                </FormControl>
                            )}/>
                        </Grid>

                        {isRegForm &&
                        <Grid container spacing={2}>
                            <Grid item sm={6}>
                                <Field name="name" render={({input, meta}) => (
                                    <FormControl fullWidth={true} className="form_control">
                                        <InputLabel htmlFor="name">
                                            Имя
                                        </InputLabel>
                                        <Input id="name" {...input} endAdornment={input.value.length >= 1 &&
                                        <InputAdornment position="end">
                                            <ClearIcon onClick={form.mutators.clearName}/>
                                        </InputAdornment>
                                        } required/>
                                        {meta.touched && meta.error &&
                                        <span className="validation_error">{meta.error}</span>}
                                    </FormControl>
                                )}/>
                            </Grid>
                            <Grid item sm={6}>
                                <Field name="surname" render={({input, meta}) => (
                                    <FormControl fullWidth={true} className="form_control">
                                        <InputLabel htmlFor="surname">
                                            Фамилия
                                        </InputLabel>
                                        <Input id="surname" {...input} endAdornment={input.value.length >= 1 &&
                                        <InputAdornment position="end">
                                            <ClearIcon onClick={form.mutators.clearSurname}/>
                                        </InputAdornment>
                                        } required/>
                                        {meta.touched && meta.error &&
                                        <span className="validation_error">{meta.error}</span>}
                                    </FormControl>
                                )}/>
                            </Grid>
                        </Grid>
                        }

                        <Grid item xs={12}>
                            <Field name="password" render={({input, meta}) => (
                                <FormControl fullWidth={true} className="form_control">
                                    <InputLabel htmlFor="password">
                                        Пароль
                                    </InputLabel>
                                    <Input type="password" id="password" {...input}
                                           endAdornment={input.value.length >= 1 &&
                                           <InputAdornment position="end">
                                               <ClearIcon onClick={form.mutators.clearPassword}/>
                                           </InputAdornment>
                                           } required/>
                                    {meta.touched && meta.error &&
                                    <span className="validation_error">{meta.error}</span>}
                                </FormControl>
                            )}/>
                        </Grid>
                        <Grid item xs={12} align="right" className="form_footer">
                            <Button className="btn"
                                    disabled={isLoading || submitting}
                                    data-testid="form-submit-btn"
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="primary">
                                Войти
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Form>
    );

    return (
        <LoginFormContainer/>
    );
};

const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
});

const mapDispatchToProps = {authRequest, regRequest};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
