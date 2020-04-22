import React from 'react';
import ReactDOM from 'react-dom';
import {AuthProvider} from "./contexts/authcontext";
import App from './components/app';
import {theme} from "loft-taxi-mui-theme";
import {MuiThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {getLocalStorageState} from './modules/localStorage/localStorage';
import createStore from './store';
import './index.scss';

const store = createStore(getLocalStorageState());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <AuthProvider>
                    <App/>
                </AuthProvider>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
