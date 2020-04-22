import {createStore, compose, applyMiddleware} from 'redux';
import {authMiddleware} from './modules/auth';
import {regMiddleware} from './modules/reg';
import {setLocalStorageState} from './modules/localStorage/localStorage';
import rootReducer from './modules';

const createAppStore = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(authMiddleware, regMiddleware),
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
