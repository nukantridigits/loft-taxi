import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import pageList from "../../appData/pageList";
import {Link} from 'react-router-dom';
import './header.scss';

const Header = ({currentPage}) => {
    Header.propTypes = {
        currentPage: PropTypes.string.isRequired
    };

    let menu = Object.values(pageList).map(page => {
        if (!page.isNotInMenu) {
            let pageId = page.id;

            return (
                <li key={pageId} className={pageId === currentPage ? 'active' : ''}>
                    <Link to={page.path}>
                        {page.title}
                    </Link>
                </li>
            );
        }
    });

    return (
        <AppBar data-testid="header" position="static" color="transparent" className="header">
            <ToolBar>
                <Typography className="logo_wrapper">
                    <Logo type="dark" />
                </Typography>
                <div className="top_menu_wrapper">
                    <ul className="header_menu">
                        {menu}
                    </ul>
                </div>
            </ToolBar>
        </AppBar>
    );
};

export default Header;
