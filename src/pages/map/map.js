import React, {Component} from 'react';
import PageList from "../../appData/pageList";
import MainLayout from "../../layouts/main";
import MapBox from "../../components/mapbox";

import './map.scss';


class MapPage extends Component {
    render() {
        let {onChangePage} = this.props;
        let pageId = PageList.map.id;

        return (
            <MainLayout onChangePage={onChangePage} className={pageId} pageId={pageId}>
                <MapBox/>
                <div>Форма</div>
            </MainLayout>
        );
    }
}

export default MapPage;
