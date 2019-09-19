import { combineReducers } from 'redux';
import sidebar from './sidebar/reducer';
import notes from './notes/reducer';

export default combineReducers({
    sidebar,
    notes
})