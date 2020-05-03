import {call, put} from 'redux-saga/effects';
import {fetchCardFailure, fetchCardSuccess, setCardSuccess, setCardFailure} from "./actions";
import {fetchCard, setCard, TRANSPORT_ERROR_MSG} from '../../helpers/loftTaxiApi';

export function* handleGettingCard(action) {
    try {
        const data = yield call(fetchCard, action.payload.token);

        if (data.id) {
            yield put(fetchCardSuccess(data));
        } else {
            yield put(fetchCardFailure(data.error));
        }
    } catch (error) {
        yield put(fetchCardFailure(TRANSPORT_ERROR_MSG + error.message));
    }
}

export function* handleSettingCard(action) {
    let payload = action.payload;

    try {
        const data = yield call(setCard, payload);

        if (data.success) {
            yield put(setCardSuccess(payload));
        } else {
            yield put(setCardFailure(data.error));
        }
    } catch (error) {
        yield put(setCardFailure(TRANSPORT_ERROR_MSG + error.message));
    }
}
