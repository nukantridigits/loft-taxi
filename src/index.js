import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app';
import {theme} from "loft-taxi-mui-theme";
import {MuiThemeProvider} from "@material-ui/core/styles";

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
