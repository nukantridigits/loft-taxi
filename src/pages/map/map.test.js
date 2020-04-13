import React from 'react';
import {render, cleanup, within} from '@testing-library/react';
import MapPage from './map';

describe('MapPage', () => {
    afterEach(cleanup);

    const onChangePage = jest.fn();
    let {getByTestId} = render(
        <MapPage onChangePage={onChangePage}/>
    );

    it('MapPage component render', () => {
        let mapPageContainer = getByTestId('map-page-content');
        expect(mapPageContainer).toBeInTheDocument();

        let profileText = within(mapPageContainer).getByText('Форма заказа');
        expect(profileText).toBeTruthy();
    });
});
