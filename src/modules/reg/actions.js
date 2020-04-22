import {createAction} from 'redux-actions';

export const regRequest = createAction('REG_REQUEST');
export const regSuccess = createAction('REG_SUCCESS');
export const regFailure = createAction('REG_FAILURE');
