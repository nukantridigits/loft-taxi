import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PageList from "../../appData/pageList";
import MainLayout from "../../layouts/main";

class ProfilePage extends Component {
    static propTypes = {
        onChangePage: PropTypes.func.isRequired,
    };

    render() {
        let {onChangePage} = this.props;
        let pageId = PageList.profile.id;

        return (
            <MainLayout onChangePage={onChangePage} className={pageId} pageId={pageId}>
                Профиль
            </MainLayout>
        );
    }
}

export default ProfilePage;
