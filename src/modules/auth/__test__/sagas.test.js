import {
    handleAuthorization as handleAuthorizationSaga,
    handleRegistration as handleRegistrationSaga
} from '../sagas';
import {recordSaga} from '../../../helpers/testUtils';
import {regRequest, authRequest, authSuccess, authFailure} from '../actions';
import {fetchCardRequest} from '../../card/actions';
import * as api from '../../../helpers/loftTaxiApi'

describe.only('handleAuthorizationSaga', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    const payload = {
        email: 'lofttaxi@yandex.ru',
        password: '123456',
    };

    it('login auth error', async () => {
        const response = {
            success: false,
            error: "errorMessage"
        };

        api.fetchCard = jest.fn();
        api.auth = jest.fn().mockImplementation(() => (response));

        const dispatched = await recordSaga(
            handleAuthorizationSaga,
            authRequest(payload)
        );

        expect(api.auth).toHaveBeenCalledWith(payload);
        expect(dispatched).toContainEqual(authFailure("errorMessage"));
        expect(api.fetchCard).not.toHaveBeenCalled();
    });

    it('login auth success', async () => {
        const response = {
            success: true,
            token: "someToken"
        };

        api.fetchCard = jest.fn();
        api.auth = jest.fn().mockImplementation(() => (response));

        const dispatched = await recordSaga(
            handleAuthorizationSaga,
            authRequest(payload)
        );

        expect(api.auth).toHaveBeenCalledWith(payload);
        expect(dispatched).toContainEqual(authSuccess(response.token));
        expect(dispatched).toContainEqual(fetchCardRequest({token: response.token}));
    });
});

describe.only('handleRegistrationSaga', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    const payload = {
        email: "lofttaxi5@yandex.ru",
        name: "loft",
        surname: "taxi",
        password: "123456",
    };

    it('reg auth error', async () => {
        const response = {
            success: false,
            error: "errorMessage"
        };

        api.reg = jest.fn().mockImplementation(() => (response));

        const dispatched = await recordSaga(
            handleRegistrationSaga,
            regRequest(payload)
        );

        expect(api.reg).toHaveBeenCalledWith(payload);
        expect(dispatched).toContainEqual(authFailure("errorMessage"));
    });

    it('reg auth success', async () => {
        const response = {
            success: true,
            token: "someToken"
        };

        api.reg = jest.fn().mockImplementation(() => (response));

        const dispatched = await recordSaga(
            handleRegistrationSaga,
            regRequest(payload)
        );

        expect(api.reg).toHaveBeenCalledWith(payload);
        expect(dispatched).toContainEqual(authSuccess(response.token));
    });
});
