import React from 'react';
import PageList from "../../appData/pageList";
import LogoutLayout from "../../layouts/logout";

const SignupPage = () => {
    let pageId = PageList.signup.id;

    return (
        <LogoutLayout className={pageId} pageId={pageId}/>
    );
};

export default SignupPage;
