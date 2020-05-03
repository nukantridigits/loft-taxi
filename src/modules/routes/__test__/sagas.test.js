import {
    handleFetchingAddressList as handleFetchingAddressListSaga,
    handleFetchingRoute as handleFetchingRouteSaga
} from '../sagas';
import {recordSaga} from '../../../helpers/testUtils';
import {
    fetchAddressListRequest,
    fetchAddressListSuccess,
    fetchAddressListFailure,
    placeOrder,
    fetchRouteRequest,
    fetchRouteSuccess,
    fetchRouteFailure
} from '../actions';
import * as api from '../../../helpers/loftTaxiApi'

describe.only('handleFetchingAddressListSaga', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('fetch addressList error', async () => {
        const response = {
            success: false,
            error: "errorMessage"
        };

        api.fetchAddressList = jest.fn().mockImplementation(() => (response));

        const dispatched = await recordSaga(
            handleFetchingAddressListSaga,
            fetchAddressListRequest
        );

        expect(api.fetchAddressList).toHaveBeenCalled();
        expect(dispatched).toContainEqual(fetchAddressListFailure("errorMessage"));
    });

    it('fetch addressList success', async () => {
        const response = {
            addresses: [
                "Пулково (LED)", "Шаверма на Невском", "Инфекционная больница им. Боткина", "Волковское кладбище"
            ]
        };

        api.fetchAddressList = jest.fn().mockImplementation(() => (response));

        const dispatched = await recordSaga(
            handleFetchingAddressListSaga,
            fetchAddressListRequest
        );

        expect(api.fetchAddressList).toHaveBeenCalled();
        expect(dispatched).toContainEqual(fetchAddressListSuccess(response.addresses));
    });
});

describe.only('handleFetchingRouteSaga', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    const payload = {
        addressFrom: "Волковское кладбище",
        addressTo: "Шаверма на Невском"
    };

    it('fetch route error', async () => {
        const response = {
            success: false,
            error: "Поездка невозможна, с сервера не был получен маршрут"
        };

        api.fetchRoute = jest.fn().mockImplementation(() => (response));

        const dispatched = await recordSaga(
            handleFetchingRouteSaga,
            fetchRouteRequest(payload)
        );

        expect(api.fetchRoute).toHaveBeenCalled();
        expect(dispatched).toContainEqual(fetchRouteFailure(response.error));
    });

    it('fetch route success', async () => {
        const response = [
            [30.355892,59.902484],
            [30.354083,59.905525]
        ];

        api.fetchRoute = jest.fn().mockImplementation(() => (response));

        const dispatched = await recordSaga(
            handleFetchingRouteSaga,
            fetchRouteRequest(payload)
        );

        expect(api.fetchRoute).toHaveBeenCalled();
        expect(dispatched).toContainEqual(fetchRouteSuccess(response));
        expect(dispatched).toContainEqual(placeOrder());
    });
});
