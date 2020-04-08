import React, {Component} from 'react';
import Logo from '../logo';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './header.scss';

class Header extends Component {
    menuItemClickHandler = (event) => {
        event.preventDefault();
        let page = '';
        let {target} = event;

        if (target.tagName !== 'SPAN') {
            page = target.dataset.pageId;
        } else {
            let link = target.closest('a');

            if (link) {
                page = link.dataset.pageId;
            }
        }

        return this.props.onChangePage(page);
    };

    render() {
        let {menuItems, currentPage} = this.props;

        let topMenu = menuItems.map((item) =>
            <Button key={item.id} href="#" className={currentPage === item.id ? 'active' : ''}
                    data-page-id={item.id} onClick={this.menuItemClickHandler}>
                {item.caption}
            </Button>
        );

        return (
            <AppBar position="static" color="transparent" className="header">
                <ToolBar>
                    <Typography className="logo_wrapper">
                        <Logo type="dark"/>
                    </Typography>
                    <Typography className="top_menu_wrapper">
                        {topMenu}
                    </Typography>
                </ToolBar>
            </AppBar>
        );
    }
}

export default Header;
