import {
    fetchAddressListSuccess,
    fetchAddressListFailure,
    fetchRouteSuccess,
    fetchRouteFailure,
    placeOrder
} from "./actions";
import {call, put} from 'redux-saga/effects';
import {fetchRoute, fetchAddressList, TRANSPORT_ERROR_MSG} from '../../helpers/loftTaxiApi';


export function* handleFetchingAddressList(action) {
    try {
        const response = yield call(fetchAddressList, action.payload);
        const {addresses, error} = response;

        if (addresses) {
            console.log('addresses', addresses);
            yield put(fetchAddressListSuccess(addresses.sort()));
        } else {
            yield put(fetchAddressListFailure(error));
        }
    } catch (error) {
        yield put(fetchAddressListFailure(TRANSPORT_ERROR_MSG + error.message));
    }
}

export function* handleFetchingRoute(action) {
    try {
        const response = yield call(fetchRoute, action.payload);

        if (response.length) {
            yield put(fetchRouteSuccess(response));
            yield put(placeOrder());
        } else {
            yield put(fetchRouteFailure('Поездка невозможна, с сервера не был получен маршрут'));
        }
    } catch (error) {
        yield put(fetchRouteFailure(TRANSPORT_ERROR_MSG + error.message));
    }
}
