import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./modules/rootSaga";
import {setLocalStorageState} from './helpers/localStorage';
import rootReducer from './modules';

const sagaMiddleware = createSagaMiddleware();

const createAppStore = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware),
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

    sagaMiddleware.run(rootSaga);

    return store;
};


export default createAppStore;
