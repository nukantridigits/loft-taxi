import {createAction} from 'redux-actions';

export const fetchCardRequest = createAction('LOFT-TAXI/FETCH_CARD_REQUEST');
export const setCardRequest = createAction('LOFT-TAXI/CARD/SET_CARD_REQUEST');
export const fetchCardSuccess = createAction('LOFT-TAXI/CARD/FETCH_CARD_SUCCESS');
export const setCardSuccess = createAction('LOFT-TAXI/CARD/SET_CARD_SUCCESS');
export const fetchCardFailure = createAction('LOFT-TAXI/CARD/FETCH_CARD_FAILURE');
export const setCardFailure = createAction('LOFT-TAXI/CARD/SET_CARD_FAILURE');
export const setProfileDefault = createAction('LOFT-TAXI/CARD/SET_PROFILE_DEFAULT');
