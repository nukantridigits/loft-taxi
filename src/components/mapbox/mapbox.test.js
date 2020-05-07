import React from 'react';
import {render, cleanup, within} from '@testing-library/react';
import MapBox from './mapbox';
import {BrowserRouter} from 'react-router-dom';


describe('MapBox', () => {
    afterEach(cleanup);

    let {getByTestId} = render(
            <BrowserRouter>
                <MapBox/>
            </BrowserRouter>
    );

    let mapBox = getByTestId('mapBox');

    it('MapBox component render', () => {
        expect(mapBox).toBeInTheDocument();
    });
});
