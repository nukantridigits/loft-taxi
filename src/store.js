import {createStore, compose, applyMiddleware} from 'redux';
import {authMiddleware} from './modules/auth';
import {setLocalStorageState} from './helpers/localStorage';
import rootReducer from './modules';

const createAppStore = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(authMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop,
        ),
    );

    store.subscribe(() => {
        setLocalStorageState({
            auth: store.getState().auth
        })
    });

    return store;
};


export default createAppStore;
