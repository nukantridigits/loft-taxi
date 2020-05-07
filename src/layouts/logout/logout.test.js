import React from 'react';
import {render, cleanup} from '@testing-library/react';
import LogoutLayout from './logout';
import PageList from "../../appData/pageList";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureStore([]);

describe('LogoutLayout', () => {
    afterAll(cleanup);
    const pageId = PageList.login.id;
    const store = mockStore({
        auth: {
            isAuthorized: false
        },
    });

    let {getByTestId} = render(
        <Provider store={store}>
            <BrowserRouter>
                <LogoutLayout className={pageId} pageId={pageId}/>
            </BrowserRouter>
        </Provider>
    );
    let logoutLayout = getByTestId('logout-layout');

    it('LogoutLayout component render test', () => {
        expect(logoutLayout).toBeInTheDocument();
    });

});
