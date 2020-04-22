import {authRequest, authSuccess, authFailure, regRequest} from "./actions";
import {request} from '../../helpers/loftTaxiApi';

const AUTH = 'auth';
const REGISTER = 'register';

export const authMiddleware = store => next => action => {
    if (action.type === authRequest.toString()) {
        request(AUTH, action.payload)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    store.dispatch(authSuccess(data.token));
                } else {
                    store.dispatch(authFailure(data.error));
                }
            })
            .catch(error => {
                store.dispatch(authFailure(error.error));
            });
    } else if (action.type === regRequest.toString()) {
        request(REGISTER, action.payload)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    store.dispatch(authSuccess(data.token));
                } else {
                    store.dispatch(authFailure(data.error));
                }
            })
            .catch(error => {
                store.dispatch(authFailure(error.error));
            });
    }

    return next(action);
};
