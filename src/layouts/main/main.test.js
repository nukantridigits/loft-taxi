import React from 'react';
import {render, cleanup} from '@testing-library/react';
import MainLayout from './main';
import PageList from "../../appData/pageList";

describe('MainLayout', () => {
    afterAll(cleanup);
    const onChangePage = jest.fn();
    const pageId = PageList.login.id;

    let {getByTestId} = render(<MainLayout onChangePage={onChangePage} className={pageId} pageId={pageId}/>);
    let mainLayout = getByTestId('main-layout');

    it('MainLayout component render test', () => {
        expect(mainLayout).toBeInTheDocument();
    });
});
