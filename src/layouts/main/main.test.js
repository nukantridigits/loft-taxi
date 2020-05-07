import React from 'react';
import {render, cleanup} from '@testing-library/react';
import MainLayout from './main';
import PageList from "../../appData/pageList";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureStore([]);

describe('MainLayout', () => {
    afterAll(cleanup);
    const pageId = PageList.login.id;
    const store = mockStore({
        auth: {
            isAuthorized: true
        },
    });

    let {getByTestId} = render(
        <Provider store={store}>
            <BrowserRouter>
                <MainLayout className={pageId} pageId={pageId}/>
            </BrowserRouter>
        </Provider>
    );

    let mainLayout = getByTestId('main-layout');

    it('MainLayout component render test', () => {
        expect(mainLayout).toBeInTheDocument();
    });
});
