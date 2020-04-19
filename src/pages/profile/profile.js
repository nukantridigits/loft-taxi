import React from 'react';
import pageList from "../../appData/pageList";
import MainLayout from "../../layouts/main";

const ProfilePage = () => {
    const pageId = pageList.profile.id;

    return (
        <MainLayout className={pageId} pageId={pageId}>
            <div data-testid="profile-page-content">
                Профиль
            </div>
        </MainLayout>
    );
};

export default ProfilePage;
