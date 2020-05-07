import React from 'react';
import EmptyProfileModal from './emptyProfileModal';
import {render, cleanup, within} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';


describe('EmptyProfileModal', () => {
    afterAll(cleanup);

    let {getByTestId} = render(
        <BrowserRouter>
            <EmptyProfileModal profileIsLoading={false}/>
        </BrowserRouter>
    );

    let emptyProfileModal = getByTestId('emptyProfileModal');

    it('EmptyProfileModal component render test', () => {
        expect(emptyProfileModal).toBeInTheDocument();
        let text = within(emptyProfileModal).getByText('Чтобы заказать машину - введите данные платёжной карты на странице профиля.');
        expect(text).toBeTruthy();
    });
});
