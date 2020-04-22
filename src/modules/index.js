import {combineReducers} from 'redux';
import auth from './auth';
import reg from './reg';

export default combineReducers({
    auth, reg
});