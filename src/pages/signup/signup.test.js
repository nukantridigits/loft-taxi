import React from 'react';
import {render, cleanup} from '@testing-library/react';
import SignupPage from './signup';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureStore([]);

describe('SignupPage', () => {
    afterEach(cleanup);
    const store = mockStore({
        auth: {
            isAuthorized: false
        },
    });

    let {getByTestId} = render(
        <Provider store={store}>
            <BrowserRouter>
                <SignupPage/>
            </BrowserRouter>
        </Provider>
    );

    let logoutLayoutWrapper = getByTestId('logout-layout');

    it('LogoutLayout component render', () => {
        expect(logoutLayoutWrapper).toBeInTheDocument();
    });

    it('SignupPage component render', () => {
        expect(logoutLayoutWrapper.classList.contains('signup_page_wrapper')).toBeTruthy();
    });
});
