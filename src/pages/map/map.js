import React, {Component} from 'react';
import PageList from "../../appData/pageList";
import MainLayout from "../../layouts/main";
import MapBoxGL from 'mapbox-gl';
import ENV from '../../appData/env';
import './map.scss';


class MapPage extends Component {
    constructor(props) {
        super(props);

        this.mapRef = React.createRef();
    }

    componentDidMount() {
        this.map = new MapBoxGL.Map({
            container: this.mapRef.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            accessToken: ENV.MAPBOX_ACCESS_TOKEN
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        let {onChangePage} = this.props;
        let pageId = PageList.map.id;

        return (
            <MainLayout onChangePage={onChangePage} className={pageId} pageId={pageId}>
                <div ref={this.mapRef} className="mapbox_container" />
                <div>Форма</div>
            </MainLayout>
        );
    }
}

export default MapPage;