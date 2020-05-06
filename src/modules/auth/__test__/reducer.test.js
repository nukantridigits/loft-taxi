import authReducer from '../reducer';
import {authRequest, authSuccess, authFailure, regRequest, authLogout} from '../actions';

describe('authReducer test', () => {
    const initialState = {
        isLoading: false,
        isAuthorized: false,
        errors: null,
        token: null,
    };

    const requestExpectedState = {
        isLoading: true,
        isAuthorized: false,
        errors: null,
        token: null
    };

    const token = 'ikj23k4jk3n4l32';
    const errors = 'Error message';

    it('authRequest', () => {
        expect(authReducer(initialState, authRequest())).toEqual(
            requestExpectedState
        );
    });

    it('regRequest', () => {
        expect(authReducer(initialState, regRequest())).toEqual(
            requestExpectedState
        );
    });

    it('authSuccess', () => {
        expect(authReducer(initialState, authSuccess(token))).toEqual({
            isLoading: false,
            isAuthorized: true,
            errors: null,
            token: token
        });
    });

    it('authFailure', () => {
        expect(authReducer(initialState, authFailure(errors))).toEqual({
            isLoading: false,
            isAuthorized: false,
            errors: errors,
            token: null
        });
    });

    it('authLogout', () => {
        expect(authReducer({
            isLoading: false,
            isAuthorized: true,
            errors: null,
            token: token
        }, authLogout())).toEqual(
            initialState
        );
    });
});