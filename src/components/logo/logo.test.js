import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Logo from './logo';

describe('Logo', () => {
    afterEach(cleanup);

    it('Logo component render', () => {
        let {getByTestId} = render(
            <Logo />
        );

        expect(getByTestId('logo-component')).toBeInTheDocument();
    });
});
