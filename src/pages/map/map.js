import React, {Component} from 'react';
import PageList from "../../appData/pageList";
import MainLayout from "../../layouts/main";

class MapPage extends Component {
    render() {
        let {onChangePage} = this.props;

        return (
            <MainLayout onChangePage={onChangePage} className={PageList.map.id}>
                    Карта
            </MainLayout>
        );
    }
}

export default MapPage;