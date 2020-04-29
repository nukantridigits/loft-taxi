import React from 'react';
import pageList from '../../appData/pageList';
import LogoutLayout from '../../layouts/logout';

const LoginPage = () =>  {
        let pageId = pageList.login.id;

        return (
            <LogoutLayout className={pageId} pageId={pageId}/>
        );
};

export default LoginPage;
