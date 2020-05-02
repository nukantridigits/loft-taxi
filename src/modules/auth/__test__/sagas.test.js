import {
    handleAuthorization as handleAuthorizationSaga,
    handleRegistration as handleRegistrationSaga} from '../sagas';
import {recordSaga} from '../../../helpers/testUtils';
import {authSuccess, authFailure} from '../actions';
import {getCardRequest} from '../../card/actions';

describe.only('handleAuthorizationSaga', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('auth error', async () => {
        const initialAction = {
            email: 'lofttaxi@yandex.ru',
            password: '123456',
        };

        const dispatched = await recordSaga(
            handleAuthorizationSaga,
            initialAction
        );


        expect(dispatched).toContainEqual(authFailure("error"));
        expect(getCardRequest).not.toHaveBeenCalled();
    });
});