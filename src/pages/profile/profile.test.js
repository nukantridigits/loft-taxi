import React from 'react';
import {render, cleanup, within} from '@testing-library/react';
import ProfilePage from './profile';

describe('ProfilePage', () => {
    afterEach(cleanup);

    const onChangePage = jest.fn();
    let {getByTestId} = render(
        <ProfilePage onChangePage={onChangePage}/>
    );

    it('ProfilePage component render', () => {
        let profilePageContainer = getByTestId('profile-page-content');
        expect(profilePageContainer).toBeInTheDocument();

        let profileText = within(profilePageContainer).getByText('Профиль');
        expect(profileText).toBeTruthy();
    });
});
