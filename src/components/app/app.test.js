import React from 'react';
import {render, cleanup, within} from '@testing-library/react';
import App from './App';

describe('App', () => {
    afterAll(cleanup);

    let {getByTestId} = render(<App/>);
    let appContainer = getByTestId('app');

    it('App component render test', () => {
        expect(appContainer).toBeInTheDocument();
    });

    it('App child component render test (LoginPage Component for example)', () => {
        if (appContainer.classList.contains('login')) {
            let innerComponent = within(appContainer).getByTestId('logout-layout');
            expect(innerComponent).toBeTruthy();
            expect(innerComponent.classList.contains('login_page_wrapper')).toBeTruthy();
        }
    });
});
