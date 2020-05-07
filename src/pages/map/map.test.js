import React from 'react';
import {render, cleanup, within} from '@testing-library/react';
import MapPage from './map';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureStore([]);

describe('MapPage', () => {
    afterEach(cleanup);

    const store = mockStore({
        auth: {
            isAuthorized: true
        },
        card: {
            isLoading: false,
            data: {
                cardName: "FAFSF SDS",
                cardNumber: "1221 3223 3423 4112",
                cvc: "554",
                expiryDate: "2025-01-19T21:00:00.000Z"
            }
        },
        routes: {
            isBooked: false
        }
    });

    let {getByTestId} = render(
        <Provider store={store}>
            <BrowserRouter>
                <MapPage profileIsChecked={false}/>
            </BrowserRouter>
        </Provider>
    );

    let mapPage = getByTestId('mapPage');

    it('MapPage component render', () => {
        expect(mapPage).toBeInTheDocument();
    });

    it('MapPage child component render (MapBox)', () => {
        let mapBox = within(mapPage).getByTestId('mapBox');
        expect(mapBox).toBeTruthy();
    });

    it('MapPage child component render by condition (EmptyProfileModal ir OrderForm)', () => {
        let emptyProfileModal = within(mapPage).getByTestId('emptyProfileModal');
        expect(emptyProfileModal).toBeTruthy();
    });
});
