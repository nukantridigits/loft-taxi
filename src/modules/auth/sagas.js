import {authSuccess, authFailure} from "./actions";
import {call, put} from 'redux-saga/effects';
import {request, TRANSPORT_ERROR_MSG} from '../../helpers/loftTaxiApi';

const AUTH = 'auth';
const REGISTER = 'register';

export function* handleAuthorization(action) {
    try {
        const response = yield call(request, AUTH, action.payload);
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

export function* handleRegistration(action) {
    try {
        const response = yield call(request, REGISTER, action.payload);
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
