import {createAction} from 'redux-actions';

export const getCardRequest = createAction('GET_CARD_REQUEST');
export const setCardRequest = createAction('SET_CARD_REQUEST');
export const getCardSuccess = createAction('GET_CARD_SUCCESS');
export const setCardSuccess = createAction('SET_CARD_SUCCESS');
export const getCardFailure = createAction('GET_CARD_FAILURE');
export const setCardFailure = createAction('SET_CARD_FAILURE');
export const setProfileDefault = createAction('SET_PROFILE_DEFAULT');
