import {
    handleGettingCard as handleGettingCardSaga,
    handleSettingCard as handleSettingCardSaga
} from '../sagas';
import {recordSaga} from '../../../helpers/testUtils';
import {
    fetchCardRequest,
    setCardRequest,
    fetchCardSuccess,
    setCardSuccess,
    fetchCardFailure,
    setCardFailure
} from '../actions';
import * as api from '../../../helpers/loftTaxiApi'

describe.only('handleGettingCardSaga', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    const payload = {
        token: "someToken"
    };

    it('fetch profile error', async () => {
        const response = {
            success: false,
            error: "errorMessage"
        };

        api.fetchCard = jest.fn().mockImplementation(() => (response));

        const dispatched = await recordSaga(
            handleGettingCardSaga,
            fetchCardRequest(payload)
        );

        expect(api.fetchCard).toHaveBeenCalledWith(payload.token);
        expect(dispatched).toContainEqual(fetchCardFailure("errorMessage"));
    });

    it('fetch profile success', async () => {
        const response = {
            id: "recyXpQFA5h8k1NJU",
            cardName: "LOFT TAXI",
            cardNumber: "1111 1111 1111 1111",
            cvc: "111",
            expiryDate: "07/20",
        };

        api.fetchCard = jest.fn().mockImplementation(() => (response));

        const dispatched = await recordSaga(
            handleGettingCardSaga,
            fetchCardRequest(payload)
        );

        expect(api.fetchCard).toHaveBeenCalledWith(payload.token);
        expect(dispatched).toContainEqual(fetchCardSuccess(response));
    });
});

describe.only('handleSettingCard', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    const payload = {
        cardName: "LOFT TAXI",
        cardNumber: "1111 1111 1111 1111",
        cvc: "111",
        expiryDate: "07/20",
    };

    it('set profile error', async () => {
        const response = {
            success: false,
            error: "errorMessage"
        };

        api.setCard = jest.fn().mockImplementation(() => (response));

        const dispatched = await recordSaga(
            handleSettingCardSaga,
            setCardRequest(payload)
        );

        expect(api.setCard).toHaveBeenCalledWith(payload);
        expect(dispatched).toContainEqual(setCardFailure("errorMessage"));
    });

    it('set profile success', async () => {
        const response = {
            success: true
        };

        api.setCard = jest.fn().mockImplementation(() => (response));

        const dispatched = await recordSaga(
            handleSettingCardSaga,
            setCardRequest(payload)
        );

        expect(api.setCard).toHaveBeenCalledWith(payload);
        expect(dispatched).toContainEqual(setCardSuccess(payload));
    });
});
