import {authSuccess, authFailure} from "./actions";
import {call, put} from 'redux-saga/effects';
import {request} from '../../helpers/loftTaxiApi';

const AUTH = 'auth';
const REGISTER = 'register1';

export function* handleAuthotization(action) {
    try {
        const response = yield call(request, AUTH, action.payload);
        const {success, token, error} = response;

        if (success) {
            yield put(authSuccess(token));
        } else if (error) {
            yield put(authFailure(error));
        }
    } catch (error) {
        yield put(authFailure(error.message));
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
        yield put(authFailure(error.message));
    }
}
