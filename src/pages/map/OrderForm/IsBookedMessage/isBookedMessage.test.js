import React from 'react';
import IsBookedMessage from './isBookedMessage';
import {render, cleanup, within} from '@testing-library/react';


describe('IsBookedMessage', () => {
    afterAll(cleanup);

    let {getByTestId} = render(
        <IsBookedMessage/>
    );

    let isBookedMessage = getByTestId('isBookedMessage');

    it('IsBookedMessage component render test', () => {
        expect(isBookedMessage).toBeInTheDocument();
        let text = within(isBookedMessage).getByText('Заказ размещён');
        expect(text).toBeTruthy();
    });
});
