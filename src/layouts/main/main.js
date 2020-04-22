import React from 'react';
import Header from '../../components/header';
import './main.scss';

const MainLayout = ({children, pageId, className}) => {
    return (
        <div data-testid="main-layout" className={`main_wrapper ${className}_page_wrapper`}>
            <Header currentPage={pageId} />
            <div className='main_content'>
                <div className={`content ${className}_content wrapper`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
