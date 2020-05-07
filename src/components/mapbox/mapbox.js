import React, {useEffect, useRef, useState} from 'react';
import ENV from "../../appData/env";
import MapBoxGL from "mapbox-gl";
import './mapbox.scss';

const LAYER_ID = 'route';

const MapBox = ({route, isBooked}) => {
    const [map, setMap] = useState(null);
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
        if (!!map && !!route.length) {
            if (!!checkLayerExist(LAYER_ID)) {
                layerRemove(LAYER_ID);
                markersClear();
            }

            drawRoute(map, route);
        }

    }, [route]);

    useEffect(() => {
        if (!!checkLayerExist(LAYER_ID) && !isBooked) {
            layerRemove(LAYER_ID);
            markersClear();
        }
    }, [isBooked]);

    const layerRemove = (layerId) => {
        map.removeLayer(layerId).removeSource(layerId);
    };

    const markersClear = () => {
        const markers = document.querySelectorAll('.marker');

        [].forEach.call(markers, (marker) => {
            marker.remove();
        });
    };

    const checkLayerExist = (layerId) => {
        if (!!map) {
            return typeof map.getLayer(layerId) !== 'undefined';
        }

        return false;
    };

    const drawRoute = (map, coordinates) => {
        map.flyTo({
            center: coordinates[0],
            zoom: 12
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

        drawMarks(coordinates[0], [...coordinates].pop());
    };

    const drawMarks = (coordsStart, coordsEnd) => {
        const markerStart = document.createElement('div');
        markerStart.className = 'marker start';
        new MapBoxGL.Marker(markerStart)
            .setLngLat(coordsStart)
            .addTo(map);

        const markerEnd = document.createElement('div');
        markerEnd.className = 'marker end';
        new MapBoxGL.Marker(markerEnd)
            .setLngLat(coordsEnd)
            .addTo(map);
    };

    return (
        <div ref={mapContainer} className="mapbox_container" data-testid="mapBox"/>
    );
};

export default MapBox;
