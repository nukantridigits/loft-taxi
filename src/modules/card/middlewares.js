/*
import {
    , setCardSuccess,
    setCardRequest, getCardSuccess,
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
    }
*/
