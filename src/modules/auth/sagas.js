import {authSuccess, authFailure} from "./actions";
import {call, put} from 'redux-saga/effects';
import {auth, reg, TRANSPORT_ERROR_MSG} from '../../helpers/loftTaxiApi';
import {fetchCardRequest} from "../card";

export function* handleAuthorization(action) {
    try {
        const response = yield call(auth, action.payload);
        const {success, token, error} = response;

        if (success) {
            yield put(authSuccess(token));
            yield put(fetchCardRequest({token}));
        } else if (error) {
            yield put(authFailure(error));
        }
    } catch (error) {
        yield put(authFailure(TRANSPORT_ERROR_MSG + error.message));
    }
}

export function* handleRegistration(action) {
    try {
        const response = yield call(reg, action.payload);
        const {success, token, error} = response;

        if (success) {
            yield put(authSuccess(token));
        } else if (error) {
            yield put(authFailure(error));
        }
    } catch (error) {
        yield put(authFailure(TRANSPORT_ERROR_MSG + error.message));
    }
}
