import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PageList from "../../appData/pageList";
import MainLayout from "../../layouts/main";
import MapBox from "../../components/mapbox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import './map.scss';


class MapPage extends Component {
    static propTypes = {
        onChangePage: PropTypes.func.isRequired,
    };

    render() {
        let {onChangePage} = this.props;
        let pageId = PageList.map.id;

        return (
            <MainLayout onChangePage={onChangePage} className={pageId} pageId={pageId}>
                <MapBox/>
                <Grid container className="search_form_wrapper">
                    <Paper>
                        <form>
                            <h1>Форма заказа</h1>
                        </form>
                    </Paper>
                </Grid>
            </MainLayout>
        );
    }
}

export default MapPage;
