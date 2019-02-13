import { combineReducers } from 'redux';
import robotReducers from './robotReducers';


export default combineReducers({
    robot:robotReducers, 
});