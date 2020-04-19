import React from 'react';
import pageList from "../../appData/pageList";
import MainLayout from "../../layouts/main";
import MapBox from "../../components/mapbox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import './map.scss';

const MapPage = () => {
    const pageId = pageList.map.id;

    return (
        <MainLayout pageId={pageId} className={pageId}>
            <div data-testid="map-page-content">
                <MapBox/>
                <Grid container className="search_form_wrapper">
                    <Paper>
                        <form>
                            <h1>Форма заказа</h1>
                        </form>
                    </Paper>
                </Grid>
            </div>
        </MainLayout>
    );
};

export default MapPage;
