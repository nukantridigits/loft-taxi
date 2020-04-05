import React, {Component} from 'react';
import PageList from "../../appData/pageList";
import MainLayout from "../../layouts/main";

class MapPage extends Component {
    render() {
        let {onChangePage} = this.props;
        let pageId = PageList.map.id;

        return (
            <MainLayout onChangePage={onChangePage} className={pageId} pageId={pageId}>
                    Карта
            </MainLayout>
        );
    }
}

export default MapPage;