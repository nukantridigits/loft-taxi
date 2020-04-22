import React from 'react';
import {render, cleanup, fireEvent, within} from '@testing-library/react';
import LoginForm from './loginForm';

describe('Form', () => {
    afterEach(cleanup);

    const onChangePage = jest.fn();

    it('page change on link click', () => {
        let {getByTestId} = render(
            <LoginForm onChangePage={onChangePage}/>
        );

        let form = getByTestId('auth-form');
        let link = within(form).getByTestId('change-form-page-link');
        fireEvent.click(link);
        expect(onChangePage).toHaveBeenCalled();
    });

    it('Form submit', () => {
        let {getByTestId} = render(
            <LoginForm onChangePage={onChangePage}/>
        );

        let form = getByTestId('auth-form');
        fireEvent.submit(form);
        expect(onChangePage).toHaveBeenCalled();
    });

    describe('LoginForm test', () => {
        //на форме логина не должно быть инпутов из формы регистрации
        it('LoginForm have no registration inputs', () => {
            let {getByTestId} = render(
                <LoginForm isRegForm={false} onChangePage={onChangePage}/>
            );

            let loginForm = within(getByTestId('auth-form'));
            expect(loginForm.queryByText('Имя')).not.toBeTruthy();
            expect(loginForm.queryByText('Фамилия')).not.toBeTruthy();
        });

        it('LoginForm inputs change', () => {
            let {getByTestId} = render(
                <LoginForm isRegForm={false} onChangePage={onChangePage}/>
            );

            let loginForm = within(getByTestId('auth-form'));

            let loginInput = loginForm.getByTestId('login-input').querySelector('input');
            fireEvent.change(loginInput, {target: {value: 'TestLogin'}});
            expect(loginInput.value).toBe('TestLogin');

            let passwordInput = loginForm.getByTestId('password-input').querySelector('input');
            fireEvent.change(passwordInput, {target: {value: 'TestPassword'}});
            expect(passwordInput.value).toBe('TestPassword');
        });
    });

    describe('ResitrationForm test', () => {
        it('ResitrationForm inputs change', () => {
            let {getByTestId} = render(
                <LoginForm isRegForm={true} onChangePage={onChangePage}/>
            );

            let regForm = within(getByTestId('auth-form'));

            let loginInput = regForm.getByTestId('login-input').querySelector('input');
            fireEvent.change(loginInput, {target: {value: 'TestLogin'}});
            expect(loginInput.value).toBe('TestLogin');

            let passwordInput = regForm.getByTestId('password-input').querySelector('input');
            fireEvent.change(passwordInput, {target: {value: 'TestPassword'}});
            expect(passwordInput.value).toBe('TestPassword');

            let nameInput = regForm.getByTestId('name-input').querySelector('input');
            fireEvent.change(nameInput, {target: {value: 'TestName'}});
            expect(nameInput.value).toBe('TestName');

            let surnameInput = regForm.getByTestId('surname-input').querySelector('input');
            fireEvent.change(surnameInput, {target: {value: 'TestSurname'}});
            expect(surnameInput.value).toBe('TestSurname');
        });
    });
});
