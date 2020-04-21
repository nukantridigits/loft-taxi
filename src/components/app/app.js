import React from 'react';
import Router from '../router'
import './app.scss';


const App = () => {
    return (
        <div className="app" id="app" data-testid="app">
            <Router/>
        </div>
    );
};

export default App;
