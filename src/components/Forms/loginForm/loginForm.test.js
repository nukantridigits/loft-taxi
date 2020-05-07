import React from 'react';
import {render, cleanup, fireEvent, within} from '@testing-library/react';
import LoginForm from './loginForm';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureStore([]);

describe('Form', () => {
    afterEach(cleanup);

    const store = mockStore({
        auth: {
            isLoading: false
        },
    });

    describe('LoginForm test', () => {
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

        it('LoginForm login-input change', () => {
            let loginInput = formWithin.getByTestId('login-input').querySelector('input');
            fireEvent.change(loginInput, {target: {value: 'TestLogin'}});
            expect(loginInput.value).toBe('TestLogin');
        });

        it('LoginForm password-input change', () => {
            let passwordInput = formWithin.getByTestId('password-input').querySelector('input');
            fireEvent.change(passwordInput, {target: {value: 'TestPassword'}});
            expect(passwordInput.value).toBe('TestPassword');
        });

        it('LoginForm name-input change', () => {
            let nameInput = formWithin.getByTestId('name-input').querySelector('input');
            fireEvent.change(nameInput, {target: {value: 'TestName'}});
            expect(nameInput.value).toBe('TestName');
        });

        it('LoginForm surname-input change', () => {
            let surnameInput = formWithin.getByTestId('surname-input').querySelector('input');
            fireEvent.change(surnameInput, {target: {value: 'TestSurname'}});
            expect(surnameInput.value).toBe('TestSurname');
        });
    });
});
