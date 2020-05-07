import {
    setCardRequest, setCardSuccess,
    fetchCardRequest, fetchCardSuccess,
    fetchCardFailure, setCardFailure,
    setProfileDefault
} from './actions';
import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

const defaultState = {
    isLoading: false,
    isExist: false,
    errors: null,
    data: {}
};

const isLoading = handleActions({
        [setCardRequest]: () => true,
        [setCardSuccess]: () => false,
        [fetchCardRequest]: () => true,
        [fetchCardSuccess]: () => false,
        [setCardFailure]: () => false,
        [fetchCardFailure]: () => false,
        [setProfileDefault]: () => defaultState.isLoading,
    },
    defaultState.isLoading
);

const isExist = handleActions({
        [setCardRequest]: () => false,
        [setCardSuccess]: () => true,
        [fetchCardRequest]: () => false,
        [fetchCardSuccess]: () => true,
        [setCardFailure]: () => false,
        [fetchCardFailure]: () => false,
        [setProfileDefault]: () => defaultState.isExist,
    },
    defaultState.isExist
);

const data = handleActions({
        [setCardSuccess]: (_state, action) => action.payload,
        [fetchCardSuccess]: (_state, action) => action.payload,
        [setProfileDefault]: () => defaultState.data,

    },
    defaultState.data
);

const errors = handleActions({
        [setCardRequest]: () => null,
        [setCardSuccess]: () => null,
        [fetchCardRequest]: () => null,
        [fetchCardSuccess]: () => null,
        [setCardFailure]: (_state, action) => action.payload,
        [fetchCardFailure]: (_state, action) => action.payload,
        [setProfileDefault]: () => defaultState.errors,
    },
    defaultState.errors
);

export default combineReducers({
    isLoading, isExist, data, errors
});
