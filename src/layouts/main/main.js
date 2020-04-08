import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import pageList from '../../appData/pageList'
import './main.scss';

class MainLayout extends Component {
    static propTypes = {
        onChangePage: PropTypes.func.isRequired,
        className: PropTypes.string.isRequired,
        pageId: PropTypes.string.isRequired
    };

    render() {
        let {children, onChangePage, className, pageId} = this.props;

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
            <div className={`main_wrapper ${className}_page_wrapper`}>
                <Header onChangePage={onChangePage} menuItems={menuItems} currentPage={pageId} />
                <div className='main_content'>
                    <div className={`content ${className}_content`}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainLayout;
