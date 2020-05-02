import React from 'react';
import pageList from '../../appData/pageList';
import MainLayout from '../../layouts/main';
import MapBox from '../../components/mapbox';
import Grid from '@material-ui/core/Grid';
import {getIsExist, getIsLoading} from '../../modules/card';
import {getIsBooked, getRoute} from '../../modules/routes';
import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import EmptyProfileModal from './EmptyProfileModal';
import './map.scss';


const MapPage = ({profileIsLoading, profileIsChecked, isBooked, route}) => {
    const pageId = pageList.map.id;

    return (
        <MainLayout pageId={pageId} className={pageId}>
            <div data-testid="map-page-content">
                <MapBox isBooked={isBooked} route={route}/>
                <Grid container className="order_wrapper wrapper">
                    {
                        profileIsChecked ?
                            <OrderForm/> :
                            <EmptyProfileModal profileIsLoading={profileIsLoading}/>
                    }
                </Grid>
            </div>
        </MainLayout>
    );
};

const mapStateToProps = state => ({
    profileIsChecked: getIsExist(state),
    profileIsLoading: getIsLoading(state),
    isBooked: getIsBooked(state),
    route: getRoute(state)
});

export default connect(mapStateToProps)(MapPage);
