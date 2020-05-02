import {handleAuthorization, handleRegistration} from "./auth/sagas";
import {handleGettingCard, handleSettingCard} from "./card/sagas";
import {handleFetchingAddressList, handleFetchingRoute} from "./routes/sagas";
import {authRequest, regRequest} from "./auth";
import {getCardRequest, setCardRequest} from "./card";
import {takeLatest} from "redux-saga/effects";
import {fetchAddressListRequest, fetchRouteRequest} from "./routes";


export function* rootSaga() {
    yield takeLatest(authRequest, handleAuthorization);
    yield takeLatest(regRequest, handleRegistration);

    //todo переделать именование get=>fetch у всех actions
    yield takeLatest(getCardRequest, handleGettingCard);
    yield takeLatest(setCardRequest, handleSettingCard);

    yield takeLatest(fetchAddressListRequest, handleFetchingAddressList);
    yield takeLatest(fetchRouteRequest, handleFetchingRoute);
}
