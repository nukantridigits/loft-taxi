import React from 'react';
import {render, cleanup} from '@testing-library/react';
import LoginPage from './login';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureStore([]);

describe('LoginPage', () => {
    afterEach(cleanup);
    const store = mockStore({
        auth: {
            isAuthorized: false
        },
    });

    let {getByTestId} = render(
        <Provider store={store}>
            <BrowserRouter>
                <LoginPage/>
            </BrowserRouter>
        </Provider>
    );

    let logoutLayoutWrapper = getByTestId('logout-layout');

    it('LogoutLayout component render', () => {
        expect(logoutLayoutWrapper).toBeInTheDocument();
    });

    it('LoginPage component render', () => {
        expect(logoutLayoutWrapper.classList.contains('login_page_wrapper')).toBeTruthy();
    });
});
