/*
import {
    setCardRequest, setCardSuccess,
    getCardRequest, getCardSuccess,
    getCardFailure, setCardFailure
} from './actions';

import {request} from "../../helpers/loftTaxiApi";

const CARD = 'card';

export const cardMiddleware = store => next => action => {
    if (action.type === setCardRequest.toString()) {
        request(CARD, action.payload)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    store.dispatch(setCardSuccess(action.payload));
                } else {
                    store.dispatch(setCardFailure(data.error));
                }
            })
            .catch(error => {
                store.dispatch(setCardFailure(error.error));
            });
    } else if (action.type === getCardRequest.toString()) {
        request(CARD, action.payload, true)
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    store.dispatch(getCardSuccess(data));
                } else if (!data.success) {
                    store.dispatch(getCardFailure(data.error));
                }
            })
            .catch(error => {
                store.dispatch(getCardFailure(error.error));
            });
    }

    return next(action);
};
*/
