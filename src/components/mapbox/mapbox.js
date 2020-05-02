import React, {useState, useEffect, useRef} from 'react';
import ENV from "../../appData/env";
import MapBoxGL from "mapbox-gl";
import './mapbox.scss';

const LAYER_ID = 'route';

const MapBox = ({isBooked, route}) => {
    const [map, setMap] = useState(null);
    const [layerIsDrawn, setLayerIsDrawn] = useState(false);
    const mapContainer = useRef(null);

    useEffect(() => {
        const initializeMap = ({setMap, mapContainer}) => {
            const map = new MapBoxGL.Map({
                accessToken: ENV.MAPBOX_ACCESS_TOKEN,
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/light-v10",
                center: [30.349351, 59.9976819],
                zoom: 12
            });

            map.on("load", () => {
                setMap(map);
                map.resize();
            });
        };

        if (!map) initializeMap({setMap, mapContainer});
    }, [map]);

    useEffect(() => {
        if (!!map && !!isBooked && !!route.length) {
            if (!!layerIsDrawn) layerRemove();

            drawRoute(map, route);
        }

    }, [isBooked, route]);

    const layerRemove = () => {
        return map.removeLayer(LAYER_ID).removeSource(LAYER_ID);
    };

    const drawRoute = (map, coordinates) => {
        map.flyTo({
            center: coordinates[0],
            zoom: 15
        });

        map.addLayer({
            id: LAYER_ID,
            type: "line",
            source: {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates
                    }
                }
            },
            layout: {
                "line-join": "round",
                "line-cap": "round"
            },
            paint: {
                "line-color": "#ffc617",
                "line-width": 8
            }
        });

        return setLayerIsDrawn(true);
    };

    return (
        <div ref={mapContainer} className="mapbox_container"/>
    );
};

export default MapBox;
