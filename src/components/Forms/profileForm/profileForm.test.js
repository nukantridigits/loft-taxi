import React from 'react';
import {render, cleanup, fireEvent, within} from '@testing-library/react';
import ProfileForm from './profileForm';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

describe('Form', () => {
    afterEach(cleanup);

    const store = mockStore({
        auth: {
            token: 'ksdnfjikdnk3nr2k3r',
        },
        card: {
            isLoading: false,
            data: {}
        }
    });

    describe('ProfileForm test', () => {
        let {getByTestId} = render(
            <Provider store={store}>
                    <ProfileForm/>
            </Provider>
        );

        let form = getByTestId('profileForm');
        let formWithin = within(form);

        it('LoginForm component render test', () => {
            expect(form).toBeInTheDocument();
        });

        it('CardNumber-input change', () => {
            let cardNumber = formWithin.getByTestId('cardNumber').querySelector('input');
            fireEvent.change(cardNumber, {target: {value: '1234 1234 1234 1234'}});
            expect(cardNumber.value).toBe('1234 1234 1234 1234');
        });

        it('ExpiryDate-input change', () => {
            let expiryDate = formWithin.getByTestId('expiryDate').querySelector('input');
            fireEvent.change(expiryDate, {target: {value: '02/25'}});
            expect(expiryDate.value).toBe('02/25');
        });

        it('CardName-input change', () => {
            let cardName = formWithin.getByTestId('cardName').querySelector('input');
            fireEvent.change(cardName, {target: {value: 'TEST TEST'}});
            expect(cardName.value).toBe('TEST TEST');
        });

        it('Cvc-input change', () => {
            let cvc = formWithin.getByTestId('cvc').querySelector('input');
            fireEvent.change(cvc, {target: {value: '123'}});
            expect(cvc.value).toBe('123');
        });
    });
});
