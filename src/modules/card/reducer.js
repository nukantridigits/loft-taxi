import {
    setCardRequest, setCardSuccess,
    getCardRequest, getCardSuccess,
    getCardFailure, setCardFailure,
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
        [getCardRequest]: () => true,
        [getCardSuccess]: () => false,
        [setCardFailure]: () => false,
        [getCardFailure]: () => false,
        [setProfileDefault]: () => defaultState.isLoading,
    },
    defaultState.isLoading
);

const isExist = handleActions({
        [setCardRequest]: () => false,
        [setCardSuccess]: () => true,
        [getCardRequest]: () => false,
        [getCardSuccess]: () => true,
        [setCardFailure]: () => false,
        [getCardFailure]: () => false,
        [setProfileDefault]: () => defaultState.isExist,
    },
    defaultState.isExist
);

const data = handleActions({
        [setCardSuccess]: (_state, action) => {
            let payload = action.payload;

            return {
                cardNumber: payload.cardNumber,
                expiryDate: payload.expiryDate,
                cardName: payload.cardName,
                cvc: payload.cvc
            }
        },
        [getCardSuccess]: (_state, action) => action.payload,
        [setProfileDefault]: () => defaultState.data,

    },
    defaultState.data
);

const errors = handleActions({
        [setCardRequest]: () => null,
        [setCardSuccess]: () => null,
        [getCardRequest]: () => null,
        [getCardSuccess]: () => null,
        [setCardFailure]: () => (_state, action) => action.payload,
        [getCardFailure]: () => (_state, action) => action.payload,
        [setProfileDefault]: () => defaultState.errors,
    },
    defaultState.errors
);

export default combineReducers({
    isLoading, isExist, data, errors
});
