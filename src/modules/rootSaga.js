import {fork} from 'redux-saga/effects';
import {handleAuthorization, handleRegistration} from "./auth/sagas";
import {handleGettingCard, handleSettingCard} from "./card/sagas";
import {authRequest, regRequest} from "./auth";
import {getCardRequest, setCardRequest} from "./card";
import {takeLatest, takeEvery} from "redux-saga/effects";


export function* rootSaga() {
    yield takeLatest(authRequest, handleAuthorization);
    yield takeLatest(regRequest, handleRegistration);

    yield takeLatest(getCardRequest, handleGettingCard);
    yield takeLatest(setCardRequest, handleSettingCard);
}
