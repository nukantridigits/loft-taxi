import React, {Component} from 'react';
import Logo from '../logo';
import './header.scss';

class Header extends Component {
    menuItemClickHandler = (event) => {
        event.preventDefault();

        let {target} = event;
        let page = target.dataset.pageId;

        return this.props.onChangePage(page);
    };

    render() {
        let {menuItems} = this.props;

        let items = menuItems.map((item) =>
            <li key={item.index}>
                <a data-page-id={item.id} href='#' onClick={this.menuItemClickHandler}>
                    {item.caption}
                </a>
            </li>
        );

        return <header className='header'>
            <div className='header_content'>
                <Logo/>
                <ul className='top_menu'>
                    {items}
                </ul>
            </div>
        </header>;
    }
}

export default Header;
