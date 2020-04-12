import React from 'react';
import {render, cleanup} from '@testing-library/react';
import LoginPage from './login';

describe('LoginPage', () => {
    afterEach(cleanup);

    const onChangePage = jest.fn();
    let {getByTestId} = render(
        <LoginPage onChangePage={onChangePage}/>
    );

    let logoutLayoutWrapper = getByTestId('logout-layout-wrapper');

    it('LogoutLayout component render', () => {
        expect(logoutLayoutWrapper).toBeInTheDocument();
    });

    it('LoginPage component render', () => {
        expect(logoutLayoutWrapper.classList.contains('login_page_wrapper')).toBeTruthy();
    });
});
