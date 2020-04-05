import React, {Component} from 'react';
import PageList from "../../appData/pageList";
import MainLayout from "../../layouts/main";

class ProfilePage extends Component {
    render() {
        let {onChangePage} = this.props;

        return (
            <MainLayout onChangePage={onChangePage} pageClass={PageList.profile.id}>
                Профиль
            </MainLayout>
        );
    }
}

export default ProfilePage;