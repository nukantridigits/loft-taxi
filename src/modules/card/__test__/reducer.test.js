import cardReducer from '../reducer';
import {
    fetchCardRequest,
    setCardRequest,
    fetchCardSuccess,
    setCardSuccess,
    fetchCardFailure,
    setCardFailure,
    setProfileDefault
} from '../actions';

describe('cardReducer test', () => {
    const errors = 'Error message';

    const initialState = {
        isLoading: false,
        isExist: false,
        errors: null,
        data: {}
    };

    const requestExpectedState = {
        isLoading: true,
        isExist: false,
        errors: null,
        data: {}
    };

    const failedExpectedState = {
        isLoading: false,
        isExist: false,
        errors: errors,
        data: {}
    };

    const fetchSuccessPayload = {
        cardName: "FAFSF SDS",
        cardNumber: "1221 3223 3423 4112",
        cvc: "554",
        expiryDate: "2025-01-19T21:00:00.000Z",
        id: "recyXpQFA5h8k1NJU"
    };

    const successExpectedState = {
        isLoading: false,
        isExist: true,
        data: fetchSuccessPayload,
        errors: null,
    };


    it('setProfileDefault', () => {
        expect(cardReducer(initialState, setProfileDefault())).toEqual(
            initialState
        );
    });

    it('fetchCardRequest', () => {
        expect(cardReducer(initialState, fetchCardRequest())).toEqual(
            requestExpectedState
        );
    });

    it('setCardRequest', () => {
        expect(cardReducer(initialState, setCardRequest())).toEqual(
            requestExpectedState
        );
    });

    it('fetchCardFailure', () => {
        expect(cardReducer(initialState, fetchCardFailure(errors))).toEqual(
            failedExpectedState
        );
    });

    it('setCardFailure', () => {
        expect(cardReducer(initialState, setCardFailure(errors))).toEqual(
            failedExpectedState
        );
    });

    it('fetchCardSuccess', () => {
        expect(cardReducer(initialState, fetchCardSuccess(fetchSuccessPayload))).toEqual(
            successExpectedState
        );
    });

    it('setCardSuccess', () => {
       expect(cardReducer(successExpectedState, setCardSuccess(fetchSuccessPayload))).toEqual(
           successExpectedState
       );
   });

});
