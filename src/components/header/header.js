import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import pageList from "../../appData/pageList";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {authLogout} from "../../modules/auth";
import {setProfileDefault} from "../../modules/card";
import {setRoutesDefault} from "../../modules/routes";
import {cleanLocalStorageState} from '../../helpers/localStorage';

import './header.scss';

const Header = ({currentPage, authLogout, setProfileDefault}) => {
    Header.propTypes = {
        currentPage: PropTypes.string.isRequired
    };

    const menuClickHandler = (event) => {
        let {target} = event;
        let pageId = target.dataset.pageId;

        if (pageId === pageList.login.id) {
            authLogout();
            setProfileDefault();
            setRoutesDefault();
            cleanLocalStorageState();
        }
    };

    const menu = Object.values(pageList).map(page => {
        if (!page.isNotInMenu) {
            let pageId = page.id;

            return (
                <li key={pageId} className={pageId === currentPage ? 'active' : ''}>
                    <Link to={page.path} onClick={menuClickHandler} data-page-id={pageId}>
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
                    <Logo type="dark"/>
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

const mapStateToProps = state => ({
        isAuthorized: state.auth.isAuthorized,
    }
);

const mapDispatchToProps = {authLogout, setProfileDefault};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
