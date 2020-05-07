import React from 'react';
import {render, cleanup, within} from '@testing-library/react';
import ProfilePage from './profile';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureStore([]);

describe('ProfilePage', () => {
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
        }
    });

    let {getByTestId} = render(
        <Provider store={store}>
            <BrowserRouter>
                <ProfilePage/>
            </BrowserRouter>
        </Provider>
    );

    it('ProfilePage component render', () => {
        let profileForm = getByTestId('profileForm');
        expect(profileForm).toBeInTheDocument();

        let profileText = within(profileForm).getByText('Профиль');
        expect(profileText).toBeTruthy();
    });
});
