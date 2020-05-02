import {
    fetchAddressListSuccess,
    fetchAddressListFailure,
    fetchRouteSuccess,
    fetchRouteFailure,
    placeOrder
} from "./actions";
import {call, put} from 'redux-saga/effects';
import {request, TRANSPORT_ERROR_MSG} from '../../helpers/loftTaxiApi';

const ADDRESS_LIST = 'addressList';
const ROUTE = 'route';

export function* handleFetchingAddressList(action) {
    try {
        const response = yield call(request, ADDRESS_LIST, action.payload, true, true);
        const {addresses, error} = response;

        if (addresses) {
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
        const response = yield call(request, ROUTE, action.payload, true);

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
