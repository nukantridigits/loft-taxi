import {fork} from 'redux-saga/effects';
import {handleAuth, handleRegistration} from "./auth/sagas";
import {authRequest, regRequest} from "./auth";
import {takeLatest, takeEvery} from "redux-saga/effects";


export function* rootSaga() {
    yield takeLatest(authRequest, handleAuth);
    // yield takeLatest(regRequest, handleRegistration);
}