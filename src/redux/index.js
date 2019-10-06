import { combineReducers } from 'redux';
import sidebarReducer from './sidebar/reducer';
import notesReducer from './notes/reducer';
import musicReducer from './music/reducer';

export default combineReducers({
    sidebarReducer,
    notesReducer,
    musicReducer
})