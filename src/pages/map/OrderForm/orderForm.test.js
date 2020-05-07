import React from 'react';
import {render, cleanup, within} from '@testing-library/react';
import OrderForm from './orderForm';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureStore([]);

describe('OrderForm', () => {
    afterEach(cleanup);
    const addressList = ["Пулково (LED)", "Шаверма на Невском", "Инфекционная больница им. Боткина", "Волковское кладбище"];
    const baseStore = {
        auth: {
            isAuthorized: true
        },
        card: {
            isLoading: false,
            isExist: true,
            data: {
                cardName: "FAFSF SDS",
                cardNumber: "1221 3223 3423 4112",
                cvc: "554",
                expiryDate: "2025-01-19T21:00:00.000Z"
            }
        }
    };

    const storeIsNotBooked = mockStore({
        ...baseStore,
        routes: {
            isBooked: false,
            addressList: addressList
        }
    });

    const storeIsBooked = mockStore({
        ...baseStore,
        routes: {
            isBooked: true,
            addressList: addressList
        }
    });

    it('IsBookedMessage component render', () => {
        let {getByTestId} = render(
            <Provider store={storeIsBooked}>
                <BrowserRouter>
                    <OrderForm/>
                </BrowserRouter>
            </Provider>
        );

        let isBookedMessage = getByTestId('isBookedMessage');
        expect(isBookedMessage).toBeInTheDocument();

        let header = within(isBookedMessage).getByText('Заказ размещён');
        expect(header).toBeTruthy();
    });

    it('OrderForm component render', () => {
        let {getByTestId} = render(
            <Provider store={storeIsNotBooked}>
                <BrowserRouter>
                    <OrderForm/>
                </BrowserRouter>
            </Provider>
        );

        let orderForm = getByTestId('orderForm');
        expect(orderForm).toBeInTheDocument();

        let makeOrderBtn = within(orderForm).getByText('Вызвать такси');
        expect(makeOrderBtn).toBeTruthy();
        expect(makeOrderBtn).toBeDisabled();

        let routeFrom = orderForm.querySelector('.routeFrom input');
        expect(routeFrom).toBeTruthy();

        let routeTo = orderForm.querySelector('.routeTo input');
        expect(routeTo).toBeTruthy();
    });
});
