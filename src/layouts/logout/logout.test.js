import React from 'react';
import {render, cleanup} from '@testing-library/react';
import LogoutLayout from './logout';
import PageList from "../../appData/pageList";

describe('LogoutLayout', () => {
    afterAll(cleanup);
    const onChangePage = jest.fn();
    const pageId = PageList.login.id;

    let {getByTestId} = render(<LogoutLayout onChangePage={onChangePage} className={pageId} pageId={pageId}/>);
    let logoutLayout = getByTestId('logout-layout');

    it('LogoutLayout component render test', () => {
        expect(logoutLayout).toBeInTheDocument();
    });

});
