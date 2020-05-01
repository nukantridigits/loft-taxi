import {createAction} from 'redux-actions';

export const fetchAddressListRequest = createAction('LOFT-TAXI/ROUTES/ADDRESS_LIST_REQUEST');
export const fetchAddressListSuccess = createAction('LOFT-TAXI/ROUTES/ADDRESS_LIST_SUCCESS');
export const fetchAddressListFailure = createAction('LOFT-TAXI/ROUTES/ADDRESS_LIST_FAILURE');
export const makeNewOrder = createAction('LOFT-TAXI/ROUTES/MAKE_NEW_ORDER');
