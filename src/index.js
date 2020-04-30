import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {theme} from "loft-taxi-mui-theme";
import {MuiThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {getLocalStorageState} from './helpers/localStorage';
import createStore from './store';
import './index.scss';

// const store = createStore(getLocalStorageState());
const store = createStore(getLocalStorageState());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                    <App/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
