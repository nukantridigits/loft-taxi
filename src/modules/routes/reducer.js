import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {fetchAddressListRequest, fetchAddressListSuccess, fetchAddressListFailure} from './actions';

const defaultState = {
    addressList: [],
    errors: null
};

const addressList = handleActions(
    {
        [fetchAddressListRequest]: () => [],
        [fetchAddressListSuccess]: (_state, action) => action.payload,
        [fetchAddressListFailure]: () => [],
    },
    defaultState.addressList
);

const errors = handleActions(
    {
        [fetchAddressListRequest]: () => null,
        [fetchAddressListSuccess]: () => null,
        [fetchAddressListFailure]: (_state, action) => action.payload,
    },
    defaultState.errors
);


export default combineReducers({
    addressList, errors
});
