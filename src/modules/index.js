import {combineReducers} from 'redux';
import auth from './auth';
import card from './card';
import routes from './routes';

export default combineReducers({
    auth, card, routes
});
