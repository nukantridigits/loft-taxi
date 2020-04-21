import {authRequest, authSuccess, authFailure} from "./actions";
import env from '../../appData/env';

const baseUrl = env.LOFT_TAXI_API_URL;

export const authMiddleware = store => next => action => {
    if (action.type === authRequest.toString()) {
        fetch(`${baseUrl}auth`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(action.payload)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    store.dispatch(authSuccess(data.token));
                } else {
                    store.dispatch(authFailure(data.error));
                }
            })
            .catch(error => {
                console.error('authFailure', error);
                store.dispatch(authFailure(error.error));
            });
    }

    return next(action);
};
