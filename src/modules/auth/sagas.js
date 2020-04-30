import {authRequest, authSuccess, authFailure, regRequest} from "./actions";
import {call, put, select} from 'redux-saga/effects';
import {request} from '../../helpers/loftTaxiApi';

const AUTH = 'auth';
const REGISTER = 'register';

export function* handleAuth(action) {
    try {
        const auth = yield call(request, AUTH, action.payload);
        console.log(auth)
    } catch (error) {
        console.error(error);
    }
}

/*
export function* handleRegistration(action) {
    console.log(action);
}*/
