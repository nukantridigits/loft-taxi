import {createAction} from 'redux-actions';

export const authRequest = createAction('AUTH_REQUEST');
export const authSuccess = createAction('AUTH_SUCCESS');
export const authFailure = createAction('AUTH_FAILURE');
export const authLogout = createAction('AUTH_LOGOUT');

export const regRequest = createAction('REG_REQUEST');
export const regSuccess = createAction('REG_SUCCESS');
export const regFailure = createAction('REG_FAILURE');
