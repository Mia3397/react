import { combineReducers } from 'redux';
import sidebarReducer from './sidebar/reducer';
import notesReducer from './notes/reducer';
import usersReducer from './users/reducer'

export default combineReducers({
    sidebarReducer,
    notesReducer,
    usersReducer
})