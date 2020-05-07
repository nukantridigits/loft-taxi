import React from 'react';
import {render, cleanup, within} from '@testing-library/react';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const mockStore = configureStore([]);

describe('App', () => {
    afterAll(cleanup);

    const store = mockStore({
        auth: {
            isAuthorized: false
        },
    });

    let {getByTestId} = render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );

    let appContainer = getByTestId('app');

    it('App component render test', () => {
        expect(appContainer).toBeInTheDocument();
    });

    it('App child component render test (LoginPage Component for example)', () => {
        let innerComponent = within(appContainer).getByTestId('logout-layout');
        expect(innerComponent).toBeTruthy();
        expect(innerComponent.classList.contains('login_page_wrapper')).toBeTruthy();
    });
});
