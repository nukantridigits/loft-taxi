import {call, put} from 'redux-saga/effects';
import {getCardFailure, getCardSuccess, setCardSuccess, setCardFailure} from "./actions";
import {request, TRANSPORT_ERROR_MSG} from '../../helpers/loftTaxiApi';

const CARD = 'card';

export function* handleGettingCard(action) {
    try {
        const data = yield call(request, CARD, action.payload, true);

        if (data.id) {
            yield put(getCardSuccess(data));
        } else {
            yield put(getCardFailure(data.error));
        }
    } catch (error) {
        yield put(getCardFailure(TRANSPORT_ERROR_MSG + error.message));
    }
}

export function* handleSettingCard(action) {
    let payload = action.payload;

    try {
        const data = yield call(request, CARD, payload);

        if (data.success) {
            yield put(setCardSuccess(payload));
        } else {
            yield put(setCardFailure(data.error));
        }
    } catch (error) {
        yield put(setCardFailure(TRANSPORT_ERROR_MSG + error.message));
    }
}
