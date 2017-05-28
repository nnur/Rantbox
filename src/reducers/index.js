import { combineReducers } from 'redux';
import rants from './rants';

const rantApp = combineReducers({
    rants
});

export default rantApp;