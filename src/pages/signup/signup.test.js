import React from 'react';
import {render, cleanup} from '@testing-library/react';
import SignupPage from './signup';

describe('SignupPage', () => {
    afterEach(cleanup);

    const onChangePage = jest.fn();
    let {getByTestId} = render(
        <SignupPage onChangePage={onChangePage} />
    );

    let logoutLayoutWrapper = getByTestId('logout-layout');

    it('LogoutLayout component render', () => {
        expect(logoutLayoutWrapper).toBeInTheDocument();
    });

    it('SignupPage component render', () => {
        expect(logoutLayoutWrapper.classList.contains('signup_page_wrapper')).toBeTruthy();
    });
});
