import React from 'react';
import ClearIcon from './clearIcon';
import {render, cleanup} from '@testing-library/react';

describe('ClearIcon', () => {
    afterAll(cleanup);

    let {getByTestId} = render(
        <ClearIcon/>
    );

    let clearIcon = getByTestId('clearIcon');

    it('ClearIcon component render test', () => {
        expect(clearIcon).toBeInTheDocument();
    });

});
