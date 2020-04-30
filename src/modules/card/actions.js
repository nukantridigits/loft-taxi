import {createAction} from 'redux-actions';

export const getCardRequest = createAction('LOFT-TAXI/CARD/GET_CARD_REQUEST');
export const setCardRequest = createAction('LOFT-TAXI/CARD/SET_CARD_REQUEST');
export const getCardSuccess = createAction('LOFT-TAXI/CARD/GET_CARD_SUCCESS');
export const setCardSuccess = createAction('LOFT-TAXI/CARD/SET_CARD_SUCCESS');
export const getCardFailure = createAction('LOFT-TAXI/CARD/GET_CARD_FAILURE');
export const setCardFailure = createAction('LOFT-TAXI/CARD/SET_CARD_FAILURE');
export const setProfileDefault = createAction('LOFT-TAXI/CARD/SET_PROFILE_DEFAULT');
