import {createStore, compose, applyMiddleware} from 'redux';
import {authMiddleware} from './modules/auth';
import localStorage from './modules/localStorage';
import rootReducer from './modules';

const initialState = localStorage.getState();

const createAppStore = () => {
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
        localStorage.setState({
            auth: store.getState().auth
        })
    });

    return store;
};


export default createAppStore;
