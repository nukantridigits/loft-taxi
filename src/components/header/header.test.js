import React from 'react';
import {render, cleanup, within, fireEvent} from '@testing-library/react';
import Header from './Header';
import App from '../../components/app/';
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
    });

/*    describe('Header click on a menu item - change the page in App', () => {
        let {getByTestId} = render(<App/>);
        let appContainer = getByTestId('app');

        let headerContainer = within(appContainer).getByTestId('header');
        let loginMenuItem = headerContainer.querySelector('[data-page-id="login"]');
        fireEvent.click(loginMenuItem);
        expect(appContainer.classList.contains('login')).toBeTruthy();
    });*/
});
