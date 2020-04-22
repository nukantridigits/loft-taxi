import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {regRequest, regSuccess, regFailure} from './actions';

const defaultState = {
    isLoading: false,
    isAuthorized: false,
    errors: null,
    token: null,
};

const isLoading = handleActions(
    {
        [regRequest]: () => true,
        [regSuccess]: () => false,
        [regFailure]: () => false,
    },
    defaultState.isLoading
);

const isRegistered = handleActions(
    {
        [regRequest]: () => false,
        [regSuccess]: () => true,
        [regFailure]: () => false,
    },
    defaultState.isAuthorized
);

const errors = handleActions(
    {
        [regRequest]: () => null,
        [regSuccess]: () => null,
        [regFailure]: (_state, action) => action.payload,
    },
    defaultState.errors
);

const token = handleActions(
    {
        [regRequest]: () => null,
        [regSuccess]: (_state, action) => action.payload,
        [regFailure]: () => null,
    },
    defaultState.token
);

export default combineReducers({
    isLoading, isRegistered, errors, token
});
