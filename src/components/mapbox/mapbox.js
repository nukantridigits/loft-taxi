import React, {Component} from 'react';
import ENV from "../../appData/env";
import MapBoxGL from "mapbox-gl";
import './mapbox.scss';

class MapBox extends Component {
    constructor(props) {
        super(props);
        this.map = null;
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
        if (this.map) {
            this.map.remove();
        }
    }

    render() {
        return (
            <div ref={this.mapRef} className="mapbox_container"/>
        );
    }
}

export default MapBox;
