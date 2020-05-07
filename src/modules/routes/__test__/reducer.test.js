import routesReducer from '../reducer';
import {
    fetchAddressListRequest,
    fetchAddressListSuccess,
    fetchAddressListFailure,
    fetchRouteRequest,
    fetchRouteSuccess,
    fetchRouteFailure,
    cancelOrder,
    placeOrder,
    setRoutesDefault
} from '../actions';

describe('routesReducer test', () => {
    const errors = 'Error message';

    const initialState = {
        addressList: [],
        errors: null,
        isBooked: false,
        route: []
    };

    const failureState = {
        addressList: [],
        errors: errors,
        isBooked: false,
        route: []
    };

    const addressList = ["Пулково (LED)", "Шаверма на Невском", "Инфекционная больница им. Боткина", "Волковское кладбище"];
    const routes = [[30.4723, 55.2345], [32.7723, 56.3981]];

    it('fetchAddressListRequest', () => {
        expect(routesReducer(initialState, fetchAddressListRequest())).toEqual(
            initialState
        );
    });

    it('fetchAddressListSuccess', () => {
        expect(routesReducer(initialState, fetchAddressListSuccess(addressList))).toEqual({
                addressList: addressList,
                errors: null,
                isBooked: false,
                route: []
            }
        );
    });

    it('fetchAddressListFailure', () => {
        expect(routesReducer(initialState, fetchAddressListFailure(errors))).toEqual(
            failureState
        );
    });

    it('fetchRouteRequest', () => {
        expect(routesReducer(initialState, fetchRouteRequest())).toEqual(
            initialState
        );
    });

    it('fetchRouteSuccess', () => {
        expect(routesReducer(initialState, fetchRouteSuccess(routes))).toEqual({
                addressList: [],
                errors: null,
                isBooked: false,
                route: routes
            }
        );
    });

    it('fetchRouteFailure', () => {
        expect(routesReducer(initialState, fetchRouteFailure(errors))).toEqual(
            failureState
        );
    });

    it('placeOrder', () => {
        expect(routesReducer({
            addressList: addressList,
            errors: null,
            isBooked: false,
            route: []
        }, placeOrder())).toEqual(
            {
                addressList: addressList,
                errors: null,
                isBooked: true,
                route: []
            }
        );
    });

    it('cancelOrder', () => {
        expect(routesReducer({
            addressList: addressList,
            errors: null,
            isBooked: true,
            route: routes
        }, cancelOrder())).toEqual(
            {
                addressList: addressList,
                errors: null,
                isBooked: false,
                route: []
            }
        );
    });

    it('setRoutesDefault', () => {
        expect(routesReducer({
            addressList: addressList,
            errors: null,
            isBooked: true,
            route: routes
        }, setRoutesDefault())).toEqual(
            initialState
        );
    });
});
