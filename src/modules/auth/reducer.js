import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {
    authRequest, authSuccess, authFailure, authLogout,
    regRequest
} from './actions';

const defaultState = {
    isLoading: false,
    isAuthorized: false,
    errors: null,
    token: null,
};

const isLoading = handleActions(
    {
        [authRequest]: () => true,
        [authSuccess]: () => false,
        [authFailure]: () => false,
        [authLogout]: () => false,
        [regRequest]: () => true,
    },
    defaultState.isLoading
);

const isAuthorized = handleActions(
    {
        [authRequest]: () => false,
        [authSuccess]: () => true,
        [authFailure]: () => false,
        [authLogout]: () => false,
        [regRequest]: () => false,
    },
    defaultState.isAuthorized
);

const errors = handleActions(
    {
        [authRequest]: () => null,
        [authSuccess]: () => null,
        [authFailure]: (_state, action) => action.payload,
        [authLogout]: () => null,
        [regRequest]: () => null,
    },
    defaultState.errors
);

const token = handleActions(
    {
        [authRequest]: () => null,
        [authSuccess]: (_state, action) => action.payload,
        [authFailure]: () => null,
        [authLogout]: () => null,
        [regRequest]: () => null,
    },
    defaultState.token
);

export default combineReducers({
    isLoading, isAuthorized, errors, token
});
