import React, {Component} from 'react';
import Header from '../../components/header';
import pageList from '../../appData/pageList'
import './main.scss';

class MainLayout extends Component {
    getWrapperClassList = (pageClass) => {
        return 'main_wrapper ' + pageClass + '_page_wrapper';
    };

    getContentClassList = (pageClass) => {
        return 'content ' + pageClass + '_content';
    };

    render() {
        let {children, onChangePage, pageClass} = this.props;

        let menuItems = [
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

        return (
            <div className={this.getWrapperClassList(pageClass)}>
                <Header onChangePage={onChangePage} menuItems={menuItems}/>
                <div className='main_content'>
                    <div className={this.getContentClassList(pageClass)}>
                         {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainLayout;
