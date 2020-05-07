import React from 'react';
import HelpIcon from './helpIcon';
import {render, cleanup} from '@testing-library/react';

describe('HelpIcon', () => {
    afterAll(cleanup);

    let {getByTestId} = render(
        <HelpIcon/>
    );

    let helpIcon = getByTestId('helpIcon');

    it('HelpIcon component render test', () => {
        expect(helpIcon).toBeInTheDocument();
    });

});
