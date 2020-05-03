import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {
    fetchAddressListRequest,
    fetchAddressListSuccess,
    fetchAddressListFailure,
    fetchRouteRequest,
    fetchRouteSuccess,
    fetchRouteFailure,
    cancelOrder,
    placeOrder,
    setRoutesDefault
} from './actions';


const defaultState = {
    addressList: [],
    errors: null,
    isBooked: false,
    route: []
};

const addressList = handleActions(
    {
        [fetchAddressListRequest]: () => [],
        [fetchAddressListSuccess]: (_state, action) => action.payload,
        [fetchAddressListFailure]: () => [],
        [setRoutesDefault]: () => defaultState.addressList
    },
    defaultState.addressList
);

const isBooked = handleActions(
    {
        [cancelOrder]: () => false,
        [placeOrder]: () => true,
        [setRoutesDefault]: () => defaultState.isBooked
    },
    defaultState.isBooked
);

const route = handleActions(
    {
        [fetchRouteRequest]: () => [],
        [fetchRouteSuccess]: (_state, action) => action.payload,
        [fetchRouteFailure]: () => [],
        [cancelOrder]: () => [],
        [setRoutesDefault]: () => defaultState.route
    },
    defaultState.route
);

const errors = handleActions(
    {
        [fetchAddressListRequest]: () => null,
        [fetchAddressListSuccess]: () => null,
        [fetchAddressListFailure]: (_state, action) => action.payload,
        [fetchRouteRequest]: () => null,
        [fetchRouteSuccess]: () => null,
        [fetchRouteFailure]: (_state, action) => action.payload,
        [setRoutesDefault]: () => defaultState.errors
    },
    defaultState.errors
);


export default combineReducers({
    addressList, isBooked, errors, route
});
