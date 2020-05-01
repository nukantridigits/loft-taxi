import {fetchAddressListSuccess, fetchAddressListFailure} from "./actions";
import {call, put} from 'redux-saga/effects';
import {request, TRANSPORT_ERROR_MSG} from '../../helpers/loftTaxiApi';

const ADDRESS_LIST = 'addressList';

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
