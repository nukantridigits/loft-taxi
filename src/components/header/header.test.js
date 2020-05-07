import React from 'react';
import {render, cleanup, within} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import {Header} from './Header';
import pageList from "../../appData/pageList";

describe('Header', () => {
    afterEach(cleanup);

    describe('Header render/active menu item', () => {
        const authLogout = jest.fn();
        const setProfileDefault = jest.fn();

        let {getByTestId} = render(
            <BrowserRouter>
                <Header authLogout={authLogout}
                        setProfileDefault={setProfileDefault}
                        currentPage={pageList.profile.id}
                />
            </BrowserRouter>
        );

        let headerComponent = getByTestId('header');

        it('Header component render', () => {
            expect(headerComponent).toBeInTheDocument();
        });

        it('Active menu item have active class', () => {
            let profileMenuItemText = within(headerComponent).getByText('Профиль');
            expect(profileMenuItemText).toBeTruthy();

            let isActive = profileMenuItemText.closest('li').classList.contains('active');
            expect(isActive).toBeTruthy();
        });
    });
});
