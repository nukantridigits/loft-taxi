import {regRequest, regSuccess, regFailure} from "./actions";
import env from '../../appData/env';

const baseUrl = env.LOFT_TAXI_API_URL;

export const regMiddleware = store => next => action => {
    if (action.type === regRequest.toString()) {
        fetch(`${baseUrl}register`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(action.payload)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    store.dispatch(regSuccess(data.token));
                } else {
                    store.dispatch(regFailure(data.error));
                }
            })
            .catch(error => {
                console.error('regFailure', error);
                store.dispatch(regFailure(error.error));
            });
    }

    return next(action);
};
