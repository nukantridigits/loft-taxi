import React from 'react';
import ReactDOM from 'react-dom';
import {AuthProvider} from "./contexts/authcontext";
import App from './components/app';
import {theme} from "loft-taxi-mui-theme";
import {MuiThemeProvider} from "@material-ui/core/styles";
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
