import React from 'react';
import {render, cleanup} from '@testing-library/react';
import {within} from '@testing-library/dom/dist/@testing-library/dom.umd.js';
import App from './App';

describe('App', () => {
    afterAll(cleanup);

    const {getByTestId} = render(<App/>);
    const appContainer = getByTestId('app');

    it('App component render test', () => {
        expect(appContainer).toBeInTheDocument();
    });

    it('App child component render test', () => {
        const innerComponent = within(appContainer).getByTestId('logout-layout-wrapper');
        expect(innerComponent).toBeTruthy();
        expect(innerComponent.classList.contains('login_page_wrapper'));
    });
});
