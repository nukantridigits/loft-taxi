import {createAction} from 'redux-actions';

export const fetchAddressListRequest = createAction('LOFT-TAXI/ROUTES/FETCH_ADDRESS_LIST_REQUEST');
export const fetchAddressListSuccess = createAction('LOFT-TAXI/ROUTES/FETCH_ADDRESS_LIST_SUCCESS');
export const fetchAddressListFailure = createAction('LOFT-TAXI/ROUTES/FETCH_ADDRESS_LIST_FAILURE');
export const cancelOrder = createAction('LOFT-TAXI/ROUTES/CANCEL_ORDER');
export const placeOrder = createAction('LOFT-TAXI/ROUTES/PLACE_ORDER');
export const fetchRouteRequest = createAction('LOFT-TAXI/ROUTES/FETCH_ROUTE_REQUEST');
export const fetchRouteSuccess = createAction('LOFT-TAXI/ROUTES/FETCH_ROUTE_SUCCESS');
export const fetchRouteFailure = createAction('LOFT-TAXI/ROUTES/FETCH_ROUTE_FAILURE');
export const setRoutesDefault = createAction('LOFT-TAXI/ROUTES/SET_ROUTES_DEFAULT');
