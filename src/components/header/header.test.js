import React from 'react';
import {render, cleanup, within, fireEvent} from '@testing-library/react';
import Header from './Header';
import pageList from "../../appData/pageList";

describe('Header', () => {
    afterEach(cleanup);

    const menuItems = [
        {
            ...pageList.map,
            caption: 'Карта'
        },
        {
            ...pageList.profile,
            caption: 'Профиль'
        },
        {
            ...pageList.login,
            caption: 'Выйти'
        }
    ];

    describe('Header render/active menu item', () => {
        const onChangePage = jest.fn();
        let {getByTestId} = render(
            <Header menuItems={menuItems}
                    onChangePage={onChangePage}
                    currentPage={pageList.profile.id}
            />
        );

        let headerComponent = getByTestId('header');

        it('Header component render', () => {
            expect(headerComponent).toBeInTheDocument();
        });

        it('Active menu item have active class', () => {
            let profileMenuItemText = within(headerComponent).getByText('Профиль');
            expect(profileMenuItemText).toBeTruthy();

            let isActive = profileMenuItemText.closest('a').classList.contains('active');
            expect(isActive).toBeTruthy();
        });

        it('Menu item click', () => {
            let loginMenuItem = within(headerComponent).getByText('Выйти').closest('a');
            fireEvent.click(loginMenuItem);
            expect(onChangePage).toHaveBeenCalled();
        });
    });
});
