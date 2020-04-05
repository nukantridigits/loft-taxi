import React, {Component} from 'react';
import PageList from "../../appData/pageList";
import './loginForm.scss';

class LoginForm extends Component {
    formSubmitHandler = (event) => {
        event.preventDefault();

        return this.props.onChangePage(PageList.map.id);
    };

    changePage = (event) => {
        event.preventDefault();
        let {target} = event;

        return this.props.onChangePage(target.dataset.pageId);
    };

    render() {
        let {className} = this.props;
        let signup = PageList.signup.id;
        let login = PageList.login.id;

        let formClass = 'form_login';
        let caption = 'Войти';
        let linkWrapperText = 'Новый пользователь?';
        let linkBtnText = 'Зарегистрируйтесь ';
        let loginLabelText = 'Имя пользователя *';

        if (className === signup) {
            formClass = 'form_signup';
            caption = 'Регистрация';
            linkWrapperText = 'Уже зарегистрированы?';
            linkBtnText = 'Войти';
            loginLabelText = 'Адрес электронной почты *';
        }

        return (
            <div className={'form_wrapper ' + formClass}>
                <form className="form" id="loft_taxi_form" onSubmit={this.formSubmitHandler}>
                    <div className="form_header form_row">
                        <h1>{caption}</h1>
                    </div>
                    <div className="link_wrapper form_row">
                        <p className="link_wrapper_text">{linkWrapperText}</p>
                        <a href="#" data-page-id={className === login ? signup : login} onClick={this.changePage}>
                            {linkBtnText}
                        </a>
                    </div>
                    <div className="form_row with_label">
                        <label htmlFor="login">{loginLabelText}</label>
                        <input id="login" name="login" type="text"/>
                    </div>
                    {className === signup &&
                    <div className="form_row">
                        <div className="form_row with_label">
                            <label htmlFor="name">Имя *</label>
                            <input id="name" name="name" type="text"/>
                        </div>
                        <div className="form_row with_label">
                            <label htmlFor="surname">Фамилия *</label>
                            <input id="surname" name="surname" type="text"/>
                        </div>
                    </div>
                    }
                    <div className="form_row with_label">
                        <label htmlFor="pswrd">Пароль *</label>
                        <input id="pswrd" name="pswrd" type="text"/>
                    </div>
                    <div className="form_row actions_wrapper">
                        <button type="sumbit">
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;
