import React from 'react';
import {render, cleanup, fireEvent, within} from '@testing-library/react';
import LoginForm from './loginForm';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import pageList from "../../../appData/pageList";

const mockStore = configureStore([]);

describe('LoginForm', () => {
    afterEach(cleanup);

    const store = mockStore({
        auth: {
            isLoading: false,
            isAuthorized: false
        },
    });

    let {getByTestId} = render(
        <Provider store={store}>
            <BrowserRouter>
                <LoginForm isRegForm={true}/>
            </BrowserRouter>
        </Provider>
    );

    let form = getByTestId('authForm');
    let formWithin = within(form);

    it('LoginForm component render test', () => {
        expect(form).toBeInTheDocument();
    });

    it('Login-input change', () => {
        let loginInput = formWithin.getByTestId('login-input').querySelector('input');
        fireEvent.change(loginInput, {target: {value: 'TestLogin'}});
        expect(loginInput.value).toBe('TestLogin');
    });

    it('Password-input change', () => {
        let passwordInput = formWithin.getByTestId('password-input').querySelector('input');
        fireEvent.change(passwordInput, {target: {value: 'TestPassword'}});
        expect(passwordInput.value).toBe('TestPassword');
    });

    it('Name-input change', () => {
        let nameInput = formWithin.getByTestId('name-input').querySelector('input');
        fireEvent.change(nameInput, {target: {value: 'TestName'}});
        expect(nameInput.value).toBe('TestName');
    });

    it('Surname-input change', () => {
        let surnameInput = formWithin.getByTestId('surname-input').querySelector('input');
        fireEvent.change(surnameInput, {target: {value: 'TestSurname'}});
        expect(surnameInput.value).toBe('TestSurname');
    });

    it('Click on registration link will change the route to Signup', () => {
        const history = createBrowserHistory();
        const {getByText} = render(
            <Provider store={store}>
                <Router history={history}>
                    <LoginForm isRegForm={false}/>
                </Router>
            </Provider>
        );

        fireEvent.click(getByText("Зарегистрируйтесь"));
        expect(history.location.pathname).toBe(pageList.signup.path);
    });

    it('Click on login link will change the route to Signup', () => {
        const history = createBrowserHistory();
        const {getByTestId} = render(
            <Provider store={store}>
                <Router history={history}>
                    <LoginForm isRegForm={true}/>
                </Router>
            </Provider>
        );

        let form = getByTestId('authForm');
        let link = within(form).getByTestId('change-form-page-link');

        fireEvent.click(link);
        expect(history.location.pathname).toBe(pageList.login.path);
    });

    it('Login form not submit with empty fields', () => {
        const onSubmit = jest.fn();
        const history = createBrowserHistory();
        const {getByTestId} = render(
            <Provider store={store}>
                <Router history={history}>
                    <LoginForm isRegForm={false} onSubmit={onSubmit}/>
                </Router>
            </Provider>
        );

        let form = getByTestId('authForm');
        let formSubmitBtn = within(form).getByTestId('formSubmitBtn');

        fireEvent.click(formSubmitBtn);

        expect(onSubmit).not.toHaveBeenCalled();
    });

    it('Login form submit', () => {
        const onSubmit = jest.fn();
        const history = createBrowserHistory();
        const {getByTestId} = render(
            <Provider store={store}>
                <Router history={history}>
                    <LoginForm isRegForm={false} onSubmit={onSubmit}/>
                </Router>
            </Provider>
        );

        let form = getByTestId('authForm');
        let formWithin = within(form);

        let loginInput = formWithin.getByTestId('login-input').querySelector('input');
        fireEvent.change(loginInput, {target: {value: 'testlogin@gmail.com'}});
        let passwordInput = formWithin.getByTestId('password-input').querySelector('input');
        fireEvent.change(passwordInput, {target: {value: '123456'}});

        let formSubmitBtn = within(form).getByTestId('formSubmitBtn');

        fireEvent.click(formSubmitBtn);

        expect(onSubmit).toHaveBeenCalled();
    });
});
