import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom'
import {createBrowserHistory} from "history";
import ProfilePage from '../../pages/profile';
import MapPage from '../../pages/map';
import pageList from "../../appData/pageList";

const mockStore = configureStore([]);

describe('Router test', () => {
    afterEach(cleanup);

    const history = createBrowserHistory();
    const store = mockStore({
        auth: {
            isLoading: false,
            isAuthorized: true
        },
        card: {
            isLoading: false,
            isExist: true,
            data: {}
        },
        routes: {
            isBooked: false,
            addressList: ["Пулково (LED)", "Шаверма на Невском", "Инфекционная больница им. Боткина", "Волковское кладбище"]
        }
    });

    it('From ProfilePage to MapPage routing', () => {
        let {getByTestId, getByText} = render(
            <Provider store={store}>
                <Router history={history}>
                    <ProfilePage/>
                </Router>
            </Provider>
        );

        let profileForm = getByTestId('profileForm');
        expect(profileForm).toBeInTheDocument();

        const mapLink = getByText(pageList.map.title);
        fireEvent.click(mapLink);

        expect(history.location.pathname === pageList.map.path).toBeTruthy();
    });

    it('From ProfilePage to Login routing', () => {
        let {getByTestId, getByText} = render(
            <Provider store={store}>
                <Router history={history}>
                    <ProfilePage/>
                </Router>
            </Provider>
        );

        let profileForm = getByTestId('profileForm');
        expect(profileForm).toBeInTheDocument();

        const loginLink = getByText(pageList.login.title);
        fireEvent.click(loginLink);

        expect(history.location.pathname === pageList.login.path).toBeTruthy();
    });

    it('From MapPage to ProfilePage routing', () => {
        let {getByTestId, getByText} = render(
            <Provider store={store}>
                <Router history={history}>
                    <MapPage/>
                </Router>
            </Provider>
        );

        let mapPage = getByTestId('mapPage');
        expect(mapPage).toBeInTheDocument();

        const profileLink = getByText(pageList.profile.title);
        fireEvent.click(profileLink);

        expect(history.location.pathname === pageList.profile.path).toBeTruthy();
    });
});
