import {handleAuthorization, handleRegistration} from "./auth/sagas";
import {handleGettingCard, handleSettingCard} from "./card/sagas";
import {handleFetchingAddressList} from "./routes/sagas";
import {authRequest, regRequest} from "./auth";
import {getCardRequest, setCardRequest} from "./card";
import {takeLatest} from "redux-saga/effects";
import {fetchAddressListRequest} from "./routes";


export function* rootSaga() {
    yield takeLatest(authRequest, handleAuthorization);
    yield takeLatest(regRequest, handleRegistration);

    //todo передать именование get у action избавиться от них
    yield takeLatest(getCardRequest, handleGettingCard);
    yield takeLatest(setCardRequest, handleSettingCard);

    yield takeLatest(fetchAddressListRequest, handleFetchingAddressList);
}
